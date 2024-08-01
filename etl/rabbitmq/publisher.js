
const amqp = require('amqplib/callback_api');

const rabbitmqUrl = 'amqp://rabbitmq';

const question = {
  questionText: "What is the capital of Kenya?",
  correctAnswer: "Nairobi",
  wrongAnswer1: "Kisumu",
  wrongAnswer2: "Nakuru",
  wrongAnswer3: "Mombasa"
};

amqp.connect(rabbitmqUrl, (error0, connection) => {
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

    channel.sendToQueue(queue, Buffer.from(JSON.stringify(question)));
    console.log("Sent question:", question);

    setTimeout(() => {
      connection.close();
    }, 500);
  });
});

