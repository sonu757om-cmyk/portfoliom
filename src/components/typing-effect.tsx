"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingEffectProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
}

export default function TypingEffect({
  texts,
  className,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 1000,
  loop = true,
}: TypingEffectProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const handleTyping = () => {
      const currentString = texts[textIndex];
      if (isDeleting) {
        // Deleting
        if (charIndex > 0) {
          setCurrentText(currentString.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        // Typing
        if (charIndex < currentString.length) {
          setCurrentText(currentString.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Wait then start deleting or stop if loop is false
          if (loop || textIndex < texts.length - 1) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        }
      }
    };
    
    // Stop if loop is false and we are at the end of the last text
    if (!loop && isDeleting && textIndex === 0 && charIndex === 0) {
      if (currentText !== texts[texts.length-1]) {
         setTextIndex(texts.length - 1);
         setIsDeleting(false);
      } else {
        return;
      }
    }
    
    if (!loop && !isDeleting && textIndex === texts.length -1 && charIndex === texts[texts.length-1].length) {
      return;
    }


    const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration, loop, currentText]);

  return (
    <h1 className={cn(className)}>
      {currentText}
      <span className="animate-ping">|</span>
    </h1>
  );
}
