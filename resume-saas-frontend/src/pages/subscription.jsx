import React from 'react';
import PlanCard from './plancard';
import PaymentOptions from './paymentOptions';


const SubscriptionPage = () => {
  return (
    <div className="ai-subscription-page">
      <h1 className="ai-subscription-title">Choose Your Plan</h1>
      <div className="ai-subscription-plans">
        <PlanCard plan="Free" price="0" features={['Basic Resume Builder','CV Builder','Cover letter Builder']} />
        <PlanCard plan="Pro" price="9.99" features={['Advanced Resume Builder','Advanced CV Builder',' and Advanced Cover letter Builder', 'AI Suggestions', 'Export Options']} />
        <PlanCard plan="Elite" price="19.99" features={['All Features', 'Priority Support', 'Unlimited Downloads']} />
      </div>

      <PaymentOptions />
    </div>
  );
};

export default SubscriptionPage;
