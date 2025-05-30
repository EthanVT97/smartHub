import express from 'express';
import { supabase } from '../supabase';
import { sendTelegramMessage } from '../services/bot.service';

const router = express.Router();

/**
 * Telegram webhook handler.
 * Expects :botId param and POST body from Telegram.
 */
router.post('/:botId', async (req, res) => {
  const botId = req.params.botId;
  const update = req.body;

  try {
    if (!update.message || !update.message.text) return res.sendStatus(200);

    const { text, chat, from } = update.message;

    await supabase.from('messages').insert([{
      bot_id: botId,
      platform: 'telegram',
      user_id: from.id,
      message: text,
      raw: update
    }]);

    if (text.trim().toLowerCase() === 'hi') {
      await sendTelegramMessage(botId, chat.id, '👋 Hello! How can I assist you today?');
    }

    return res.sendStatus(200);
  } catch (err) {
    console.error('Telegram webhook error:', err);
    return res.sendStatus(500);
  }
});

export default router;