import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/images/kite.png"
        productName="Falcon"
        productDescription="Our ultra-fast flagship trading platform designed for modern investors. With real-time market data, advanced charting tools, and a sleek, intuitive interface, Falcon offers a seamless experience across devices. Whether you're analyzing trends or placing orders, enjoy the speed, clarity, and power of Falcon on both Android and iOS."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageUrl="media/images/console.png"
        productName="Pulse"
        productDescription="Pulse is your all-in-one analytics dashboard. It provides AI-powered insights into your portfolio’s performance, trade history, and asset allocation. Visualizations, trend tracking, and performance alerts help you stay ahead of the curve with precision."
        learnMore=""
      />
      <LeftSection
        imageUrl="media/images/coin.png"
        productName="Nest"
        productDescription="Nest is your personalized wealth-building assistant. Track and invest in mutual funds, SIPs, and ETFs seamlessly. Nest uses smart data science models to recommend investment portfolios based on your goals and risk appetite — all with zero commission."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageUrl="media/images/kiteconnect.png"
        productName="Sentinel"
        productDescription="Sentinel is your smart trading alert system. Set powerful, condition-based market alerts that work across stocks, derivatives, and mutual funds. Receive real-time notifications and stay informed without constantly tracking the markets."
        learnMore=""
      />
      <LeftSection
        imageUrl="media/images/varsity.png"
        productName="Insight"
        productDescription="Insight is an AI-curated educational app for understanding the stock market and financial literacy. It breaks down complex concepts into bite-sized, interactive lessons — ideal for beginners, students, and even advanced users who want to stay sharp with market knowledge on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
    </>
  );
}

export default ProductsPage;
