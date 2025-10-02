'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Users, Calendar, Zap, AlertCircle, TrendingUp } from 'lucide-react';

interface UrgencyElementsProps {
  type?: 'countdown' | 'limited_spots' | 'discount' | 'poc_slots';
  className?: string;
}

export default function UrgencyElements({ type = 'countdown', className = '' }: UrgencyElementsProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 23,
    minutes: 45,
    seconds: 12
  });

  const [spotsLeft, setSpotsLeft] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  //  Simulate spots being taken occasionally
  useEffect(() => {
    const spotsTimer = setInterval(() => {
      if (Math.random() < 0.1 && spotsLeft > 2) { // 10% chance every interval
        setSpotsLeft(prev => Math.max(2, prev - 1));
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(spotsTimer);
  }, [spotsLeft]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (type === 'countdown') {
    return (
      <div className={`bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-200 rounded-xl p-4 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-red-500" />
            <span className="text-sm font-medium text-ai-dark">
              30% discount valid until June 30th
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-red-600 font-medium">Expires in:</span>
            <div className="flex items-center space-x-1 bg-red-500 text-white px-2 py-1 rounded text-sm font-mono">
              <span>{formatNumber(timeLeft.hours)}</span>
              <span className="animate-pulse">:</span>
              <span>{formatNumber(timeLeft.minutes)}</span>
              <span className="animate-pulse">:</span>
              <span>{formatNumber(timeLeft.seconds)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'limited_spots') {
    return (
      null
      // <div className={`bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-200 rounded-xl p-4 ${className}`}>
      //   <div className="flex items-center justify-between">
      //     <div className="flex items-center space-x-2">
      //       <Users className="w-5 h-5 text-orange-500" />
      //       <span className="text-sm font-medium text-ai-dark">
      //         Last {spotsLeft} spots for Q3 2025 implementation
      //       </span>
      //     </div>
      //     <div className="flex items-center space-x-2">
      //       <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
      //         {spotsLeft} left
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }

  if (type === 'discount') {
    return (
      null
      // <div className={`bg-gradient-to-r from-ai-green/10 to-ai-blue/10 border border-ai-green/20 rounded-xl p-4 ${className}`}>
      //   <div className="flex items-center justify-between">
      //     <div className="flex items-center space-x-2">
      //       <TrendingUp className="w-5 h-5 text-ai-green" />
      //       <span className="text-sm font-medium text-ai-dark">
      //         Early Bird: 30% off implementation
      //       </span>
      //     </div>
      //     <div className="flex items-center space-x-2">
      //       <div className="bg-ai-green text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
      //         Save $15K
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }

  if (type === 'poc_slots') {
    return (
      null
      // <div className={`bg-gradient-to-r from-purple-500/10 to-ai-blue/10 border border-purple-200 rounded-xl p-4 ${className}`}>
      //   <div className="flex items-center justify-between">
      //     <div className="flex items-center space-x-2">
      //       <Zap className="w-5 h-5 text-purple-500" />
      //       <span className="text-sm font-medium text-ai-dark">
      //         Only 3 slots available for free Proof of Concept
      //       </span>
      //     </div>
      //     <div className="flex items-center space-x-2">
      //       <AlertCircle className="w-4 h-4 text-purple-500" />
      //       <span className="text-xs text-purple-600 font-medium">Limited time</span>
      //     </div>
      //   </div>
      // </div>
    );
  }

  return null;
}