const amqp = require('amqplib/callback_api');
const Question = require('./models/Question');
const sequelize = require('./database');

const rabbitmqUrl = 'amqp://rabbitmq';

const connectRabbitMQ = () => {
  amqp.connect(rabbitmqUrl, (error0, connection) => {
    if (error0) {
      console.error("Failed to connect to RabbitMQ, retrying in 5 seconds...", error0);
      return setTimeout(connectRabbitMQ, 5000);
    }
    connection.createChannel((error1, channel) => {
      if (error1) {
        throw error1;
      }
      const queue = 'question_queue';

      channel.assertQueue(queue, {
        durable: false
      });

      console.log("Waiting for messages in %s. To exit press CTRL+C", queue);

      channel.consume(queue, async (msg) => {
        const questionData = JSON.parse(msg.content.toString());

        try {
          await Question.create(questionData);
          console.log("Question inserted:", questionData);
        } catch (error) {
          console.error("Error inserting question:", error);
        }
      }, {
        noAck: true
      });
    });
  });
};

sequelize.sync().then(() => {
  console.log('Database connected');
  connectRabbitMQ();
});
