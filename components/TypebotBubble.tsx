'use client';

import { Bubble } from "@typebot.io/react";

export default function TypebotBubble() {
  return (
    <Bubble
      typebot="my-typebot-bes5d8m"
      apiHost="https://bot.azcarental.chat"
      previewMessage={{
        message:
          "Olá! Aqui é o Paulo assistente virtual da Cygnus IT Services. Como posso te ajudar hoje?",
        autoShowDelay: 5000,
        avatarUrl:
          "https://storage.googleapis.com/agentpro-cdn/cygnus/logotipo%20cygnus-04.png",
      }}
      theme={{ button: { backgroundColor: "#598E71", size: "large" } }}
    />
  );
}
