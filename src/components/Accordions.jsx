const Accordions = () => {
    return (
        <div className="mt-4">
                <h2 className="text-4xl text-center mb-4 mt-8">F.A.Q</h2>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    Q: What is CasaSpot?
                </div>
                <div className="collapse-content">
                    <p>A: CasaSpot is a premier platform for discovering residential properties tailored to your needs. Whether are looking to buy or rent a home, CasaSpot provides a seamless experience to find the perfect property that suits your lifestyle.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Q: How do I get started with CasaSpot?
                </div>
                <div className="collapse-content">
                    <p>A: To get started, simply visit our website CasaSpot.com and begin exploring our extensive listings of residential properties. You can create an account to unlock additional features such as saving your favorite listings and receiving personalized recommendations.

                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Q: Is CasaSpot available in my area?
                </div>
                <div className="collapse-content">
                    <p>A: CasaSpot currently operates in select regions and cities. To find out if CasaSpot is available in your area, please visit our website and enter your location in the search bar.

                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Q: Can I save my favorite listings on CasaSpot?

                </div>
                <div className="collapse-content">
                    <p>A: Yes, you can save your favorite listings by creating an account on CasaSpot. This allows you to easily access and review your saved listings at any time.


                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Q: How often are property listings updated on CasaSpot?
                </div>
                <div className="collapse-content">
                    <p>A: We strive to update our property listings regularly to provide you with the most up-to-date information. However, availability may vary depending on factors such as market demand and property availability.


                    </p>
                </div>
            </div>
        </div>
    );
};

export default Accordions;