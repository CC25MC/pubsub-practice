const { Router } = require('express');

const { validateFields } = require('../middlewares');

const { createTopic, getTopic, publish, subscribe, getMessage, cancelSubscription } = require('../controllers/pubsub');

const router = Router();

router.get('/', getTopic);

router.post('/createTopic', [
    validateFields,
], createTopic);

router.post('/publish', [
    validateFields,
], publish);

router.post('/subscribe', [
    validateFields,
], subscribe);

router.post('/message', getMessage);
router.post('/cancel', cancelSubscription);

module.exports = router;