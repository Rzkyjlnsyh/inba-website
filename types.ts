import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular: boolean;
}

export interface ChartDataPoint {
  date: string;
  portfolio: number;
  market: number;
}