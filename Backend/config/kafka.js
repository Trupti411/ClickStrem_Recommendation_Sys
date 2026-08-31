const { Kafka, logLevel } = require('kafkajs');

const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID || 'ecommerce-backend',
  brokers: [process.env.KAFKA_BROKERS || '127.0.0.1:9092'],
  logLevel: logLevel.NOTHING,
  retry: {
    retries: 0,
  },
});

const producer = kafka.producer();

const connectKafka = async () => {
  try {
    await producer.connect();
    console.log('[Kafka] Producer connected successfully');
  } catch (err) {
    console.log('[Kafka Warning] Producer offline. Streaming buffer bypassed.');
  }
};

const sendClickstreamEvent = async (eventData) => {
  try {
    await producer.send({
      topic: process.env.KAFKA_TOPIC || 'user-clicks',
      messages: [
        {
          key: eventData.user_session || eventData.user_id || 'guest',
          value: JSON.stringify(eventData),
        },
      ],
    });
  } catch (err) {
    // Silently bypass when Kafka is not active
  }
};

module.exports = { connectKafka, sendClickstreamEvent };