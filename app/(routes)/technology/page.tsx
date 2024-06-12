import React from 'react';

export default function page() {
  return (
    <div className="w-full">
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Our Technology
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
                Discover the cutting-edge technology powering the Rupaya
                cryptocurrency platform.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 lg:py-34">
        <div className="container px-4 md:px-6">
          <div className="space-y-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#f8b500] text-white rounded-full w-12 h-12 flex items-center justify-center">
                <BitcoinIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold">
                Evolution of Rupaya&apos;s Blockchain
              </h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Rupaya&apos;s blockchain technology has undergone significant evolution
              since its inception in 2014. We started with a scrypt PoW
              blockchain, inspired by Litecoin, to introduce cryptocurrencies to
              South Asia. However, we encountered challenges with scalability
              and security.To address these issues, we made a strategic shift to
              a POS blockchain based on Blackcoin. This transition allowed us to
              improve network security and transaction processing. Our quest for
              advanced features led us to utilize the PIVX codebase, making
              notable progress during the 2018 bull run.As the crypto landscape
              evolved, we moved to the TomoChain-based Ethereum chain. This
              migration allowed us to leverage the benefits of Ethereum&apos;s robust
              ecosystem and utilize masternodes for enhanced network governance.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#00b894] text-white rounded-full w-12 h-12 flex items-center justify-center">
                <NetworkIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold">
                Advantages of Masternodes
              </h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Masternodes play a crucial role in ensuring the stability and
              security of our blockchain. They enable faster and more efficient
              transaction validation, making our network more scalable and
              reliable. Masternodes also actively participate in network
              governance, allowing token holders to have a say in
              decision-making processes.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#e84393] text-white rounded-full w-12 h-12 flex items-center justify-center">
                <LockIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold">Blockchain Security</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              At Rupaya, security is a top priority. We have implemented robust
              security measures to safeguard our users and transactions. Our
              team continuously monitors the network to identify and mitigate
              potential threats, ensuring a safe environment for users to
              transact and engage with our project.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#0984e3] text-white rounded-full w-12 h-12 flex items-center justify-center">
                <ScalingIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold">
                Scalability and Transaction Speed
              </h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Scalability and transaction speed are essential aspects of any
              successful blockchain. Our current technology is designed to
              handle a growing number of users and transactions efficiently.
              With the support of masternodes, our blockchain can process
              transactions at high speeds, making it suitable for a global
              audience.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#6c5ce7] text-white rounded-full w-12 h-12 flex items-center justify-center">
                <MoveUpIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold">
                Future Technological Upgrades
              </h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              As we strive to provide the best experience for our users, we are
              committed to continuous technological improvements. Our roadmap
              includes launching a new, optimized blockchain, which will replace
              the current ERC20 token contract on Binance Chain. This upgrade
              will unlock new possibilities and propel our mission to empower
              financial freedom worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}