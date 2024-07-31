// etl/etl.js
const amqp = require('amqplib/callback_api');
const Question = require('./models/Question');
const sequelize = require('./database');

amqp.connect('amqp://rabbitmq', (error0, connection) => {
  if (error0) {
    throw error0;
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

sequelize.sync().then(() => {
  console.log('Database connected');
});
