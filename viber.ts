import express from 'express';
import { supabase } from '../supabase';
import { sendViberMessage } from '../services/bot.service';

const router = express.Router();

/**
 * Viber webhook handler.
 * Expects :botId param and JSON body from Viber server.
 */
router.post('/:botId', async (req, res) => {
  const botId = req.params.botId;
  const event = req.body;

  try {
    if (event.event !== 'message' || !event.message?.text) return res.sendStatus(200);

    const { sender, message } = event;

    await supabase.from('messages').insert([{
      bot_id: botId,
      platform: 'viber',
      user_id: sender.id,
      message: message.text,
      raw: event
    }]);

    if (message.text.trim().toLowerCase() === 'hi') {
      await sendViberMessage(botId, sender.id, '👋 Hello from Viber bot!');
    }

    return res.sendStatus(200);
  } catch (err) {
    console.error('Viber webhook error:', err);
    return res.sendStatus(500);
  }
});

export default router;