'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  MessageSquare,
  Calendar,
  Headphones,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Globe,
  Flag,
  AlertCircle,
  Send,
  Star,
  Award,
  Shield,
  Target,
  Zap,
  FileText,
  User,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  contactType: string;
  industry: string;
  message: string;
  preferredContact: string;
  timezone: string;
}

const defaultFormData: ContactForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  jobTitle: '',
  contactType: '',
  industry: '',
  message: '',
  preferredContact: '',
  timezone: ''
};

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<ContactForm>(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const updateFormData = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const offices = [
    {
      name: 'São Paulo',
      type: 'Global Headquarters',
      country: 'Brazil',
      flag: '🇧🇷',
      address: 'Av. Paulista, 1.374 - 12th floor',
      city: 'Bela Vista, São Paulo - SP',
      zip: 'ZIP: 01310-100, Brazil',
      phone: '+55 (11) 3456-7890',
      email: 'contato@itcygnus.com',
      description: 'Main development hub with 80+ engineers and data scientists',
      hours: 'Mon-Fri: 8AM-6PM BRT',
      specialties: ['AI Development', 'Technical Support', 'R&D']
    },
    {
      name: 'Orlando',
      type: 'Americas Operations',
      country: 'USA',
      flag: '🇺🇸',
      address: '1395 Brickell Ave, Suite 800',
      city: 'Orlando, FL 33131, USA',
      zip: '',
      phone: '+1 (305) 555-0123',
      email: 'contact@itcygnus.com',
      description: 'North American sales, support and customer success operations',
      hours: 'Mon-Fri: 8AM-6PM EST',
      specialties: ['Sales', 'Customer Success', 'Implementation']
    },
    {
      name: 'San Diego',
      type: 'Innovation Lab',
      country: 'USA',
      flag: '🇺🇸',
      address: '501 W Broadway Suite 800',
      city: 'San Diego, CA, 92101, USA',
      zip: '',
      phone: '+1 (619) 555-0142',
      email: 'contact@itcygnus.us',
      description: 'Advanced AI research and emerging technologies development',
      hours: 'Mon-Fri: 9AM-5PM PST',
      specialties: ['AI Research', 'Innovation', 'Advanced Analytics']
    }
  ];

  const contactTypes = [
    {
      type: 'Personalized Demo',
      description: 'See our AI platform tailored to your industry',
      duration: '30 minutes',
      icon: Calendar,
      value: 'demo'
    },
    {
      type: 'Free Consulting',
      description: 'Strategic consultation with our experts',
      duration: '1 hour',
      icon: MessageSquare,
      value: 'consulting'
    },
    {
      type: 'Technical Support',
      description: 'Get help with implementation or issues',
      duration: 'Ongoing',
      icon: Headphones,
      value: 'support'
    },
    {
      type: 'Partnership Inquiry',
      description: 'Explore partnership opportunities',
      duration: 'Flexible',
      icon: Briefcase,
      value: 'partnership'
    }
  ];

  const quickStats = [
    { metric: '< 2 hrs', label: 'Response Time', icon: Clock },
    { metric: '100+', label: 'Happy Clients', icon: Users },
    { metric: '24/7', label: 'Support Available', icon: Headphones },
    { metric: '99.9%', label: 'Customer Satisfaction', icon: Star }
  ];

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
          <div className="pt-20 lg:pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-ai-green rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-in">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-ai-dark mb-6">
                Message Sent{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Successfully!
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-ai-medium mb-8 leading-relaxed max-w-3xl mx-auto">
                Thank you for contacting ITCygnus. Our team will respond within 2 hours during business hours. 
                For urgent matters, please call our emergency line at +1 (305) 555-0199.
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-ai-light/50 mb-8">
                <h3 className="text-xl font-bold text-ai-dark mb-6">What Happens Next?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { step: 1, title: 'We Review', desc: 'Our team reviews your inquiry', time: '30 min' },
                    { step: 2, title: 'We Respond', desc: 'Personal response from our specialist', time: '< 2 hours' },
                    { step: 3, title: 'We Connect', desc: 'Schedule a call or meeting', time: 'Same day' }
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <span className="text-lg font-bold text-ai-blue">{item.step}</span>
                      </div>
                      <h4 className="font-semibold text-ai-dark mb-2">{item.title}</h4>
                      <p className="text-sm text-ai-medium mb-1">{item.desc}</p>
                      <span className="text-xs text-ai-green font-medium bg-ai-green/10 px-2 py-1 rounded-full">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button variant="ai_outline" size="lg" className="group">
                    Back to Homepage
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="ai_primary" size="lg" className="group">
                    Schedule Demo
                    <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-ai-blue rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ai-green rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-ai rounded-2xl flex items-center justify-center mr-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div className="h-px bg-gradient-ai w-32"></div>
              </div>

              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ai-dark leading-tight mb-8 transition-all duration-1000 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Let's Transform Your{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Company Together
                </span>
              </h1>
              
              <p 
                className={`text-xl lg:text-2xl text-ai-medium leading-relaxed mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                Contact our specialists to discover how AI can revolutionize your processes. 
                We offer free consulting and personalized demos for your industry.
              </p>

              {/* Quick Stats */}
              <div 
                className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-400 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                }`}
              >
                {quickStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-ai-light/50 text-center">
                      <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-ai-blue" />
                      </div>
                      <div className="text-2xl font-bold text-ai-green mb-2">{stat.metric}</div>
                      <p className="text-sm text-ai-medium font-medium">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-20 bg-gradient-to-br from-ai-light/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-ai-dark mb-6">
                Choose Your{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Contact Method
                </span>
              </h2>
              <p className="text-lg text-ai-medium max-w-3xl mx-auto">
                We offer multiple ways to connect with our team. Choose the option that best fits your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactTypes.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-ai-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-ai-blue" />
                      </div>
                      <h3 className="text-lg font-bold text-ai-dark mb-2">{contact.type}</h3>
                      <p className="text-sm text-ai-medium mb-4">{contact.description}</p>
                      <div className="text-xs text-ai-green font-medium bg-ai-green/10 px-3 py-1 rounded-full">
                        {contact.duration}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <Card className="shadow-xl border-ai-light/50">
                  <CardHeader className="bg-gradient-to-r from-ai-blue/5 to-ai-green/5">
                    <CardTitle className="flex items-center space-x-2 text-ai-dark">
                      <Send className="w-6 h-6 text-ai-blue" />
                      <span>Send Us a Message</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-ai-dark font-medium">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => updateFormData('name', e.target.value)}
                            className="mt-2"
                            placeholder="John Smith"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-ai-dark font-medium">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData('email', e.target.value)}
                            className="mt-2"
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone" className="text-ai-dark font-medium">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateFormData('phone', e.target.value)}
                            className="mt-2"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company" className="text-ai-dark font-medium">
                            Company *
                          </Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => updateFormData('company', e.target.value)}
                            className="mt-2"
                            placeholder="Acme Corporation"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="jobTitle" className="text-ai-dark font-medium">
                            Job Title
                          </Label>
                          <Input
                            id="jobTitle"
                            value={formData.jobTitle}
                            onChange={(e) => updateFormData('jobTitle', e.target.value)}
                            className="mt-2"
                            placeholder="Chief Technology Officer"
                          />
                        </div>
                        <div>
                          <Label htmlFor="industry" className="text-ai-dark font-medium">
                            Industry
                          </Label>
                          <Select value={formData.industry} onValueChange={(value) => updateFormData('industry', value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="financial">Financial Services</SelectItem>
                              <SelectItem value="insurance">Insurance</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="government">Government</SelectItem>
                              <SelectItem value="retail">Retail & E-commerce</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="contactType" className="text-ai-dark font-medium">
                          How can we help you? *
                        </Label>
                        <Select value={formData.contactType} onValueChange={(value) => updateFormData('contactType', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select contact type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="demo">Request a personalized demo</SelectItem>
                            <SelectItem value="consulting">Free strategic consulting</SelectItem>
                            <SelectItem value="support">Technical support</SelectItem>
                            <SelectItem value="partnership">Partnership inquiry</SelectItem>
                            <SelectItem value="pricing">Pricing information</SelectItem>
                            <SelectItem value="other">Other inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-ai-dark font-medium">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => updateFormData('message', e.target.value)}
                          className="mt-2"
                          rows={5}
                          placeholder="Tell us about your current challenges and how we can help..."
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="preferredContact" className="text-ai-dark font-medium">
                            Preferred Contact Method
                          </Label>
                          <Select value={formData.preferredContact} onValueChange={(value) => updateFormData('preferredContact', value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select preference" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="email">Email</SelectItem>
                              <SelectItem value="phone">Phone</SelectItem>
                              <SelectItem value="video">Video call</SelectItem>
                              <SelectItem value="any">Any method</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="timezone" className="text-ai-dark font-medium">
                            Your Timezone
                          </Label>
                          <Select value={formData.timezone} onValueChange={(value) => updateFormData('timezone', value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select timezone" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="est">Eastern Time (EST)</SelectItem>
                              <SelectItem value="cst">Central Time (CST)</SelectItem>
                              <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                              <SelectItem value="brt">Brazil Time (BRT)</SelectItem>
                              <SelectItem value="gmt">GMT/UTC</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting || !formData.name || !formData.email || !formData.company || !formData.contactType || !formData.message}
                        className="w-full bg-ai-blue hover:bg-ai-blue/90 text-white"
                        size="lg"
                      >
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                        <Send className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Office Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-ai-dark mb-6">Our Global Offices</h3>
                  <p className="text-ai-medium mb-8 leading-relaxed">
                    With strategic locations across the Americas, we provide comprehensive support 
                    and expertise to clients worldwide.
                  </p>
                </div>

                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index} className="shadow-lg border-ai-light/50 hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 mb-6">
                          <div className="text-3xl">{office.flag}</div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="text-xl font-bold text-ai-dark">{office.name}</h4>
                              <span className="text-sm text-ai-blue font-medium bg-ai-blue/10 px-2 py-1 rounded-full">
                                {office.type}
                              </span>
                            </div>
                            <p className="text-sm text-ai-medium">{office.description}</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <MapPin className="w-4 h-4 text-ai-green mt-1 flex-shrink-0" />
                            <div className="text-sm">
                              <div className="text-ai-dark font-medium">{office.address}</div>
                              <div className="text-ai-medium">{office.city}</div>
                              {office.zip && <div className="text-ai-medium">{office.zip}</div>}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-ai-blue flex-shrink-0" />
                              <a href={`tel:${office.phone}`} className="text-sm text-ai-dark hover:text-ai-blue transition-colors">
                                {office.phone}
                              </a>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="w-4 h-4 text-ai-green flex-shrink-0" />
                              <a href={`mailto:${office.email}`} className="text-sm text-ai-dark hover:text-ai-green transition-colors">
                                {office.email}
                              </a>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-ai-blue flex-shrink-0" />
                            <span className="text-sm text-ai-medium">{office.hours}</span>
                          </div>

                          <div className="flex flex-wrap gap-2 pt-2">
                            {office.specialties.map((specialty, specIndex) => (
                              <span key={specIndex} className="text-xs bg-ai-light/50 text-ai-dark px-2 py-1 rounded-full">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Emergency Contact */}
                <Card className="shadow-lg border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <AlertCircle className="w-6 h-6 text-red-500" />
                      <h4 className="text-lg font-bold text-red-800">Emergency Support</h4>
                    </div>
                    <p className="text-red-700 mb-4">
                      For urgent technical issues outside business hours:
                    </p>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-red-500" />
                      <a href="tel:+1-305-555-0199" className="text-red-600 font-semibold hover:text-red-800 transition-colors">
                        +1 (305) 555-0199
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}