import React from 'react';
import { FormattedMessage } from 'react-intl';

function ExplorationInterface() {
  return (
    <section className="exploration-interface">
      <article className="content-section">
        <h3><FormattedMessage id="fitness" defaultMessage="Fitness" /></h3>
        <p><FormattedMessage id="discoverPersonalizedFitness" defaultMessage="Discover personalized fitness routines and workout plans." /></p>
      </article>
      <article className="content-section">
        <h3><FormattedMessage id="nutrition" defaultMessage="Nutrition" /></h3>
        <p><FormattedMessage id="nutritionPlansAdvice" defaultMessage="Nutrition plans and dietary advice to eat healthily." /></p>
      </article>
      <article className="content-section">
        <h3><FormattedMessage id="wellness" defaultMessage="Wellness" /></h3>
        <p><FormattedMessage id="mentalHealthGuidance" defaultMessage="Guidance on mental health and wellness practices." /></p>
      </article>
      <article className="content-section">
        <h3><FormattedMessage id="goalChecklist" defaultMessage="Goal Checklist" /></h3>
        <p><FormattedMessage id="trackHealthObjectives" defaultMessage="Keep track of your health objectives and milestones." /></p>
      </article>
    </section>
  );
}

export default ExplorationInterface;
