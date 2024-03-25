import { Card } from 'react-bootstrap';
import React from 'react';
import { FormattedMessage } from 'react-intl';

function CommunityFeature() {
  return (
    <section className="community-feature">
      <Card>
        <div className="community-section">
          <h3><FormattedMessage id="questionsAndAnswers" defaultMessage="Questions and Answers" /></h3>
          <p><FormattedMessage id="findHelpfulAnswers" defaultMessage="Find helpful answers to health and wellness questions from our expert community." /></p>
        </div>
      </Card>
      <Card>
        <div className="community-section">
          <h3><FormattedMessage id="latestPosts" defaultMessage="Latest Posts" /></h3>
          <p><FormattedMessage id="checkLatestBlogPosts" defaultMessage="Check out the latest blog posts for the newest trends and studies on health." /></p>
        </div>
      </Card>
      <Card>
        <div className="community-section">
          <h3><FormattedMessage id="healthTips" defaultMessage="Health Tips" /></h3>
          <p><FormattedMessage id="dailyTipsForDiet" defaultMessage="Daily tips to optimize your diet and fitness routines for the best results." /></p>
        </div>
      </Card>
      <Card>
        <div className="community-section">
          <h3><FormattedMessage id="successStories" defaultMessage="Success Stories" /></h3>
          <p><FormattedMessage id="readSuccessStories" defaultMessage="Read about the journeys of others and share your own health success story." /></p>
        </div>
      </Card>
      <Card>
        <div className="community-section">
          <h3><FormattedMessage id="recommendations" defaultMessage="Recommendations" /></h3>
          <p><FormattedMessage id="exploreRecommendations" defaultMessage="Explore product and service recommendations personalized to your health profile." /></p>
        </div>
      </Card>
    </section>
  );
}

export default CommunityFeature;
