"use client";
import { useState, useEffect } from "react";
import config from "@/data/config";

import OpeningEnvelope from "@/components/OpeningEnvelope";
import FallingPetals from "@/components/FallingPetals";
import MusicPlayer from "@/components/MusicPlayer";
import AutoScroll from "@/components/AutoScroll";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Couple from "@/components/Couple";
import Chapter from "@/components/Chapter";
import CountdownSection from "@/components/CountdownSection";
import EventInfo from "@/components/EventInfo";
import Welcome from "@/components/Welcome";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function Home() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("locked", !opened);
    return () => document.body.classList.remove("locked");
  }, [opened]);

  return (
    <>
      <OpeningEnvelope onOpen={() => setOpened(true)} />
      {opened && <FallingPetals count={14} />}
      <MusicPlayer started={opened} />
      <AutoScroll started={opened} />

      {/* Khung dạng điện thoại căn giữa: trên máy tính ảnh không bị tràn/méo */}
      <main className="relative mx-auto w-full max-w-[500px] bg-cream-50 shadow-2xl overflow-hidden">
        <Hero />
        <Intro />
        <Couple />
        {config.chapters.map((c, i) => (
          <Chapter key={i} images={c.images} chapter={c.chapter} accent={c.accent} lines={c.lines} align={c.align} layout={c.layout} />
        ))}
        <CountdownSection />
        <EventInfo />
        <Welcome />
        <RSVP />
        <Footer />
      </main>
    </>
  );
}
