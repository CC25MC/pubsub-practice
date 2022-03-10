// Imports the Google Cloud client library
const { PubSub, v1 } = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();
const subClient = new v1.SubscriberClient();

const createTopic = async (req, res) => {
    const { topic } = req.body;
    // Creates a new topic
    await pubSubClient.createTopic(topic);
    res.status(201).json({
        msg: `El tema ${topic} fue creado con exito`,
    });
}

const getTopic = async (req, res) => {
    const [allTopics] = await pubSubClient.getTopics();
    res.status(200).json({ topics: allTopics.map((topic) => ({ name: topic.name.split("/").reverse()?.[0] })) })
}

const publish = async (req, res) => {
    const { topic, dataBuffer } = req.body;
    const data = Buffer.from(JSON.stringify(dataBuffer));
    if (topic) {
        try {
            const messageId = await pubSubClient
                .topic(topic)
                .publish(data);

            console.log(`Message ${messageId} published.`);
            res.status(201).send({
                msg: "Publicacion creada correctamente"
            })
        } catch (error) {
            console.error(`Received error while publishing ${error.message}`);
            res.status(404).send({
                msg: "Error Creando la publicación"
            });
        }
    }
}

const subscribe = async (req, res) => {
    const { subscriptionName, topic } = req.body;
    if (topic) {
        try {
            await pubSubClient.topic(topic).createSubscription(subscriptionName);
            res.status(201).send({
                msg: "Subscripcion creada correctamente"
            });
        } catch (error) {
            console.log(error.message);
            res.status(404).send({
                msg: "No se pudo crear la subscripcion porque falto el tema || la subscripcion"
            });
        }
    }
}

const getMessage = async (req, res) => {
    // References an existing subscription
    const { subscriptionName } = req.body;

    if (subscriptionName) {
        try {
            const formattedSubscription = subClient.subscriptionPath(
                "earnest-command-267104",
                subscriptionName
            );

            const request = {
                subscription: formattedSubscription,
                maxMessages: 10,
            };

            const [response] = await subClient.pull(request);

            const ress = [];

            for (const message of response.receivedMessages) {
                ress.push(JSON.parse(message.message.data.toString()));
            }

            res.status(201).send({
                data: ress
            });
        } catch (error) {
            res.status(404).send({
                msg: "error al obtener el mensaje"
            });
        }

    } else {
        res.status(404).send({
            msg: "Al parecer no estas registrado"
        });
    }



}
module.exports = {
    createTopic,
    getTopic,
    publish,
    subscribe,
    getMessage
};
