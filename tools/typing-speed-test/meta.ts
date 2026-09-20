import type { Tool } from "@/lib/types";
import TypingSpeedTest from "./index";

export const typingSpeedTestMeta: Tool = {
  name: "Typing Speed Test",
  slug: "typing-speed-test",
  category: "everyday-tools",
  shortDescription: "Test your typing speed (WPM) and accuracy in real-time with instant results.",
  icon: "Keyboard",
  component: TypingSpeedTest,
  featured: true,
  popular: true,
  indexable: true,
  schemaType: "SoftwareApplication",
  relatedTools: ["word-character-counter", "random-number-generator"],
  seo: {
    title: "Typing Speed Test - Check Your WPM Online | ToolHub",
    metaDescription:
      "Test your typing speed and accuracy for free. Live WPM tracking, real-time highlighting, and instant results. No sign-up required.",
    h1: "Typing Speed Test",
  },
  content: {
    whatIsIt:
      "This tool measures your typing speed in words per minute (WPM) and your accuracy as you type a sample passage, with live feedback as you go.",
    howToUse: [
      "Start typing in the box below — the timer starts on your first keystroke.",
      "Correct characters turn green, mistakes turn red, so you can see your accuracy live.",
      "Finish the passage to see your final WPM, accuracy, and time.",
    ],
    formula: "WPM = (Number of words typed) ÷ (Time elapsed in minutes)",
    examples: [
      "Typing 50 words in 60 seconds = 50 WPM",
      "Average typists reach 40 WPM; touch typists often exceed 70-80 WPM",
    ],
    notes: [
      "Words per minute is calculated based on completed words, matching how most typing tests measure speed.",
    ],
    faqs: [
      {
        question: "What's considered a good typing speed?",
        answer:
          "40 WPM is average, 60-70 WPM is fast, and 80+ WPM is considered very fast. Accuracy matters just as much as raw speed.",
      },
      {
        question: "Does a typo lower my WPM?",
        answer:
          "This tool tracks accuracy separately from WPM, so you can see both your raw speed and how many characters you typed correctly.",
      },
    ],
  },
};
