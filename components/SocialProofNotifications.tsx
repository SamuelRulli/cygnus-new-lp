'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, User, Building2, Download, Calendar, TrendingUp } from 'lucide-react';

interface Notification {
  id: number;
  type: 'demo' | 'savings' | 'implementation' | 'download';
  message: string;
  timestamp: Date;
  icon: any;
}

export default function SocialProofNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const notificationTemplates = [
    {
      type: 'demo' as const,
      messages: [
        'John Smith (Memorial Hospital) just scheduled a demo',
        'Sarah Williams (Aetna Insurance) requested a healthcare demo',
        'Michael Chen (Wells Fargo) booked a financial services demo',
        'Lisa Rodriguez (Boeing) scheduled a manufacturing demo',
        'David Thompson (State of California) requested a government demo'
      ],
      icon: Calendar
    },
    {
      type: 'savings' as const,
      messages: [
        '100+ employee company saved $180,000 this month',
        'Healthcare network reduced costs by $2.3M annually',
        'Insurance provider detected $45M in fraud',
        'Regional bank saved 75% processing time',
        'Manufacturing plant increased efficiency by 40%'
      ],
      icon: TrendingUp
    },
    {
      type: 'implementation' as const,
      messages: [
        '15 new clients implemented AI.OCR in the last 48h',
        '8 companies deployed AI.DATA this week',
        '12 organizations started AI.DOC implementation',
        '6 enterprises launched Echo AI Hub',
        '10 businesses activated AI.AGENTS'
      ],
      icon: CheckCircle
    },
    {
      type: 'download' as const,
      messages: [
        'Sarah Williams (Aetna Insurance) downloaded ROI guide 2 minutes ago',
        'Technology Director at Fortune 500 downloaded implementation guide',
        'CTO at regional bank accessed compliance whitepaper',
        'Healthcare CIO downloaded AI transformation template',
        'VP Operations downloaded success case study'
      ],
      icon: Download
    }
  ];

  const generateRandomNotification = (): Notification => {
    const template = notificationTemplates[Math.floor(Math.random() * notificationTemplates.length)];
    const message = template.messages[Math.floor(Math.random() * template.messages.length)];
    
    return {
      id: Date.now() + Math.random(),
      type: template.type,
      message,
      timestamp: new Date(),
      icon: template.icon
    };
  };

  useEffect(() => {
    // Generate initial notification after a delay
    const initialDelay = setTimeout(() => {
      const notification = generateRandomNotification();
      setNotifications([notification]);
      setCurrentNotification(notification);
      setIsVisible(true);
    }, 3000);

    // Generate new notifications every 15-25 seconds
    const interval = setInterval(() => {
      const notification = generateRandomNotification();
      setNotifications(prev => [notification, ...prev.slice(0, 4)]); // Keep last 5
      setCurrentNotification(notification);
      setIsVisible(true);

      // Hide notification after 8 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 8000);
    }, Math.random() * 10000 + 15000); // Random between 15-25 seconds

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (currentNotification && isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 8000);

      return () => clearTimeout(hideTimer);
    }
  }, [currentNotification, isVisible]);

  if (!currentNotification) return null;

  const Icon = currentNotification.icon;

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'demo':
        return 'from-ai-blue/10 to-ai-blue/5 border-ai-blue/20';
      case 'savings':
        return 'from-ai-green/10 to-ai-green/5 border-ai-green/20';
      case 'implementation':
        return 'from-purple-500/10 to-purple-500/5 border-purple-500/20';
      case 'download':
        return 'from-orange-500/10 to-orange-500/5 border-orange-500/20';
      default:
        return 'from-ai-blue/10 to-ai-blue/5 border-ai-blue/20';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'demo':
        return 'text-ai-blue';
      case 'savings':
        return 'text-ai-green';
      case 'implementation':
        return 'text-purple-500';
      case 'download':
        return 'text-orange-500';
      default:
        return 'text-ai-blue';
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm">
      <div
        className={`transform transition-all duration-500 ease-in-out ${
          isVisible
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div
          className={`bg-gradient-to-r ${getNotificationColor(
            currentNotification.type
          )} backdrop-blur-sm border rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group`}
          onClick={() => setIsVisible(false)}
        >
          <div className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full bg-white/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
              <Icon className={`w-4 h-4 ${getIconColor(currentNotification.type)}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-ai-dark leading-relaxed">
                {currentNotification.message}
              </p>
              <p className="text-xs text-ai-medium mt-1">
                {currentNotification.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible(false);
              }}
              className="text-ai-medium hover:text-ai-dark transition-colors duration-200 opacity-0 group-hover:opacity-100"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}