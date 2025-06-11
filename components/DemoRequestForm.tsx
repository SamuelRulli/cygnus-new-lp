'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Calendar,
  Building2,
  Users,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  FileText,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Star,
  Play,
  BarChart3,
  Clock,
  Award,
  Shield,
  Download
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UrgencyElements from '@/components/UrgencyElements';
import SocialProofNotifications from '@/components/SocialProofNotifications';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  industry: string;
  companySize: string;
  country: string;
  monthlyDocuments: string;
  currentChallenges: string;
  timeline: string;
  demoType: string;
  newsletter: boolean;
  privacy: boolean;
}

const defaultFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  jobTitle: '',
  industry: '',
  companySize: '',
  country: '',
  monthlyDocuments: '',
  currentChallenges: '',
  timeline: '',
  demoType: '',
  newsletter: false,
  privacy: false
};

export default function DemoRequestForm() {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.company && formData.jobTitle && formData.industry && formData.companySize;
      case 3:
        return formData.monthlyDocuments && formData.timeline && formData.demoType && formData.privacy;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <SocialProofNotifications />
        <main className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
          <div className="pt-20 lg:pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-24 h-24 bg-ai-green rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-in">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-ai-dark mb-6">
                Demo Request Submitted{' '}
                <span className="bg-gradient-ai bg-clip-text text-transparent">
                  Successfully!
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-ai-medium mb-12 leading-relaxed max-w-3xl mx-auto">
                Thank you for your interest in ITCygnus. Our enterprise AI specialists will contact you within 
                24 hours to schedule your personalized demonstration.
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: Clock, title: '24 Hours', desc: 'Response time guarantee' },
                  { icon: Users, title: '100+', desc: 'Successful implementations' },
                  { icon: Target, title: '75%', desc: 'Average time savings' }
                ].map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-ai-light/50">
                      <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-ai-blue" />
                      </div>
                      <div className="text-2xl font-bold text-ai-green mb-2">{metric.title}</div>
                      <p className="text-sm text-ai-medium">{metric.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-ai-light/50 mb-12">
                <h3 className="text-2xl font-bold text-ai-dark mb-6">What Happens Next?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  {[
                    { step: 1, title: 'Initial Contact', desc: 'Our specialist will call you within 24 hours', time: '24 hours', icon: Phone },
                    { step: 2, title: 'Needs Assessment', desc: 'Brief discussion about your specific requirements', time: '30 minutes', icon: FileText },
                    { step: 3, title: 'Custom Demo', desc: 'Personalized demonstration with your use cases', time: '45 minutes', icon: Play },
                    { step: 4, title: 'ROI Analysis', desc: 'Detailed projection of benefits for your organization', time: '1 week', icon: BarChart3 }
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.step} className="flex items-start space-x-4 p-4 bg-ai-light/20 rounded-xl">
                        <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-ai-blue" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-ai-dark">{item.title}</h4>
                            <span className="text-xs text-ai-green font-medium bg-ai-green/10 px-2 py-1 rounded-full">
                              {item.time}
                            </span>
                          </div>
                          <p className="text-sm text-ai-medium">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button variant="ai_outline" size="lg" className="group">
                    Back to Homepage
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/roi-calculator">
                  <Button variant="ai_primary" size="lg" className="group">
                    Calculate Your ROI
                    <Target className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white via-ai-light/10 to-white">
        <SocialProofNotifications />
        {/* Header */}
        <header className="bg-ai-dark text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3">
                <img
                  src="https://storage.googleapis.com/agentpro-cdn/cygnus/logotipo%20cygnus-01.png"
                  alt="Logo Cygnus"
                  className="w-22 h-20 object-contain"
                />
                {/* <span className="text-xl font-bold text-white">ITCygnus</span> */}
              </Link>
              <div className="flex items-center space-x-4">
                <Play className="w-6 h-6 text-ai-green" />
                <span className="text-lg font-semibold">Request Demo</span>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Urgency Elements */}
          <div className="mb-8 space-y-4">
            <UrgencyElements type="limited_spots" />
            <UrgencyElements type="discount" />
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-ai-dark mb-6">
              See ITCygnus in Action with a{' '}
              <span className="bg-gradient-ai bg-clip-text text-transparent">
                Personalized Demo
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-ai-medium max-w-4xl mx-auto leading-relaxed">
              Get a customized demonstration of our AI platform tailored to your specific business needs. 
              Our experts will show you exactly how ITCygnus can transform your document processing workflows.
            </p>
          </div>

          {/* Demo Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { 
                title: 'General Demo', 
                desc: 'Quick, focused presentation', 
                time: '30 min',
                icon: Play,
                popular: false
              },
              { 
                title: 'Industry-Specific Demo', 
                desc: 'Tailored to your sector', 
                time: '45 min',
                icon: Building2,
                popular: true
              },
              { 
                title: 'Proof of Concept', 
                desc: 'Test with your data', 
                time: '1 week',
                icon: Target,
                popular: false
              }
            ].map((demo, index) => {
              const Icon = demo.icon;
              return (
                <Card key={index} className={`shadow-lg border-ai-light/50 text-center hover:shadow-xl transition-all duration-300 ${demo.popular ? 'ring-2 ring-ai-green relative' : ''}`}>
                  {demo.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-ai-green text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-ai-blue" />
                    </div>
                    <h3 className="font-bold text-ai-dark mb-2">{demo.title}</h3>
                    <p className="text-sm text-ai-medium mb-3">{demo.desc}</p>
                    <div className="text-xs text-ai-green font-medium bg-ai-green/10 px-2 py-1 rounded-full">
                      {demo.time}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[
                { step: 1, title: 'Personal Info', icon: Users },
                { step: 2, title: 'Company Details', icon: Building2 },
                { step: 3, title: 'Demo Preferences', icon: FileText }
              ].map((item, index) => {
                const Icon = item.icon;
                const isActive = currentStep === item.step;
                const isCompleted = currentStep > item.step;
                
                return (
                  <div key={item.step} className="flex items-center">
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-ai-blue text-white' : 
                      isCompleted ? 'bg-ai-green text-white' : 
                      'bg-ai-light text-ai-medium'
                    }`}>
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                    {index < 2 && (
                      <ArrowRight className={`w-5 h-5 mx-2 ${
                        currentStep > item.step ? 'text-ai-green' : 'text-ai-light'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-ai-light/50">
                <CardHeader className="bg-gradient-to-r from-ai-blue/5 to-ai-green/5">
                  <CardTitle className="flex items-center space-x-2 text-ai-dark">
                    {currentStep === 1 && <Users className="w-6 h-6 text-ai-blue" />}
                    {currentStep === 2 && <Building2 className="w-6 h-6 text-ai-blue" />}
                    {currentStep === 3 && <FileText className="w-6 h-6 text-ai-blue" />}
                    <span>
                      {currentStep === 1 && 'Personal Information'}
                      {currentStep === 2 && 'Company Details'}
                      {currentStep === 3 && 'Demo Preferences'}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Step 1: Personal Info */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName\" className="text-ai-dark font-medium">
                            Full Name *
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => updateFormData('firstName', e.target.value)}
                            className="mt-2"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-ai-dark font-medium">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => updateFormData('lastName', e.target.value)}
                            className="mt-2"
                            placeholder="Smith"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-ai-dark font-medium">
                          Corporate Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          className="mt-2"
                          placeholder="john.smith@company.com"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-ai-dark font-medium">
                          Phone Number *
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
                    </div>
                  )}

                  {/* Step 2: Company Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
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
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="jobTitle" className="text-ai-dark font-medium">
                          Job Title *
                        </Label>
                        <Input
                          id="jobTitle"
                          value={formData.jobTitle}
                          onChange={(e) => updateFormData('jobTitle', e.target.value)}
                          className="mt-2"
                          placeholder="Chief Technology Officer"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="industry" className="text-ai-dark font-medium">
                            Industry *
                          </Label>
                          <Select value={formData.industry} onValueChange={(value) => updateFormData('industry', value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="financial">Financial Services</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="retail">Retail & E-commerce</SelectItem>
                              <SelectItem value="government">Government</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="insurance">Insurance</SelectItem>
                              <SelectItem value="logistics">Logistics & Supply Chain</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="companySize" className="text-ai-dark font-medium">
                            Number of Employees *
                          </Label>
                          <Select value={formData.companySize} onValueChange={(value) => updateFormData('companySize', value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="startup">1-50 employees</SelectItem>
                              <SelectItem value="small">51-200 employees</SelectItem>
                              <SelectItem value="medium">201-1000 employees</SelectItem>
                              <SelectItem value="large">1001-5000 employees</SelectItem>
                              <SelectItem value="enterprise">5000+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Demo Preferences */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="monthlyDocuments" className="text-ai-dark font-medium">
                            Main Document Challenge *
                          </Label>
                          <Select value={formData.monthlyDocuments} onValueChange={(value) => updateFormData('monthlyDocuments', value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select challenge" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="volume">High document volume</SelectItem>
                              <SelectItem value="accuracy">Data extraction accuracy</SelectItem>
                              <SelectItem value="speed">Processing speed</SelectItem>
                              <SelectItem value="integration">System integration</SelectItem>
                              <SelectItem value="compliance">Regulatory compliance</SelectItem>
                              <SelectItem value="costs">Operational costs</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="timeline" className="text-ai-dark font-medium">
                            Implementation Timeline *
                          </Label>
                          <Select value={formData.timeline} onValueChange={(value) => updateFormData('timeline', value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immediate (0-7 Days)</SelectItem>
                              <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                              <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                              <SelectItem value="long">Long-term (6+ months)</SelectItem>
                              <SelectItem value="exploring">Just exploring</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="demoType" className="text-ai-dark font-medium">
                          Preferred Demo Type *
                        </Label>
                        <Select value={formData.demoType} onValueChange={(value) => updateFormData('demoType', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select demo type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Demo (30 min)</SelectItem>
                            <SelectItem value="industry">Industry-Specific Demo (45 min)</SelectItem>
                            <SelectItem value="poc">Proof of Concept (1 week)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="currentChallenges" className="text-ai-dark font-medium">
                          Current Challenges & Goals
                        </Label>
                        <Textarea
                          id="currentChallenges"
                          value={formData.currentChallenges}
                          onChange={(e) => updateFormData('currentChallenges', e.target.value)}
                          className="mt-2"
                          rows={4}
                          placeholder="Tell us about your current document processing challenges and what you hope to achieve with automation..."
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="newsletter"
                            checked={formData.newsletter}
                            onCheckedChange={(checked) => updateFormData('newsletter', checked as boolean)}
                            className="mt-1"
                          />
                          <Label htmlFor="newsletter" className="text-sm text-ai-medium leading-relaxed">
                            I would like to receive updates about ITCygnus products, industry insights, and best practices
                          </Label>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="privacy"
                            checked={formData.privacy}
                            onCheckedChange={(checked) => updateFormData('privacy', checked as boolean)}
                            className="mt-1"
                          />
                          <Label htmlFor="privacy" className="text-sm text-ai-medium leading-relaxed">
                            I agree to the <Link href="/privacy" className="text-ai-blue hover:underline">Privacy Policy</Link> and 
                            <Link href="/terms" className="text-ai-blue hover:underline ml-1">Terms of Service</Link> *
                          </Label>
                        </div>
                      </div>

                      {/* Supporting Text */}
                      <div className="bg-ai-green/10 rounded-lg p-4 border border-ai-green/20">
                        <p className="text-sm text-ai-dark font-medium mb-2">No commitment. Cancel anytime.</p>
                        <p className="text-xs text-ai-medium">
                          Your demo is completely free with no obligations. We respect your time and will provide 
                          valuable insights regardless of whether you choose to move forward.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-ai-light">
                    <Button
                      variant="ghost"
                      onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                      disabled={currentStep === 1}
                      className="text-ai-medium"
                    >
                      Previous
                    </Button>
                    
                    {currentStep < 3 ? (
                      <Button
                        onClick={() => setCurrentStep(currentStep + 1)}
                        disabled={!isStepValid(currentStep)}
                        className="bg-ai-blue hover:bg-ai-blue/90 text-white"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        onClick={handleSubmit}
                        disabled={!isStepValid(currentStep) || isSubmitting}
                        className="bg-ai-green hover:bg-ai-green/90 text-white"
                      >
                        {isSubmitting ? 'Scheduling...' : 'Schedule Free Demo'}
                        <Play className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* What to Expect */}
              <Card className="shadow-lg border-ai-light/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-ai-dark">
                    <Star className="w-6 h-6 text-ai-green" />
                    <span>What to Expect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { title: 'Personalized Demo', desc: 'See ITCygnus configured for your specific use case' },
                    { title: 'ROI Analysis', desc: 'Get preliminary cost savings projections' },
                    { title: 'Technical Q&A', desc: 'Ask our experts about integration and security' },
                    { title: 'Next Steps', desc: 'Discuss pilot program and implementation timeline' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-ai-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-ai-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-ai-dark text-sm">{item.title}</h4>
                        <p className="text-xs text-ai-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Customer Success */}
              <Card className="shadow-lg border-ai-light/50 bg-gradient-to-br from-ai-blue/5 to-ai-green/5">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-ai-blue mb-2">100+</div>
                    <div className="text-sm font-semibold text-ai-dark mb-3">Successful Implementations</div>
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-ai-green fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-ai-medium leading-relaxed">
                      "ITCygnus reduced our document processing time by 80% and saved us $2M annually. 
                      The implementation was seamless and the support team is exceptional."
                    </p>
                    <div className="text-xs text-ai-dark font-medium mt-2">
                      - Healthcare Fortune 500 Company
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Urgency Element */}
              <UrgencyElements type="poc_slots" />

              {/* Contact Info */}
              <Card className="shadow-lg border-ai-light/50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-ai-dark mb-4">Need Help?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-ai-blue" />
                      <span className="text-ai-medium">+1 (800) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-ai-blue" />
                      <span className="text-ai-medium">sales@itcygnus.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-ai-blue" />
                      <span className="text-ai-medium">Mon-Fri: 8AM-6PM EST</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}