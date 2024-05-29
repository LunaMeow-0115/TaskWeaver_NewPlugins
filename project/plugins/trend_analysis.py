import pandas as pd
from taskweaver.plugin import Plugin, register_plugin
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

@register_plugin
class TrendAnalysisPlugin(Plugin):
    def __call__(self, city: str = "New York"):
        """
        Analyzes housing market trends in New York using a linear regression model based on
        historical for-sale inventory and median list price data. This analysis provides insights
        into how changes in inventory might affect home prices.
        :param city: This parameter is kept for compatibility but only 'New York' is processed.
        :return description: A user-friendly description of housing market trends.
        """

        # Real data for New York
        dates = pd.date_range(start="2021-03-31", periods=38, freq='M')
        inventory_data = [
            61966.0, 62738.0, 65965.0, 68986.0, 70650.0, 70786.0, 69101.0, 67467.0, 63984.0,
            57820.0, 50768.0, 46430.0, 48039.0, 51340.0, 55710.0, 58872.0, 61312.0, 61386.0,
            60262.0, 58241.0, 55450.0, 50400.0, 45916.0, 42796.0, 43253.0, 44197.0, 45829.0,
            46198.0, 45506.0, 43956.0, 42515.0, 42586.0, 42068.0, 39540.0, 36461.0, 34858.0,
            36244.0, 38637.0
        ]
        list_price_data = [
            594667.0, 597667.0, 598667.0, 595633.0, 589267.0, 579600.0, 574633.0, 574333.0, 576333.0,
            576333.0, 576667.0, 584550.0, 592550.0, 603550.0, 610667.0, 617667.0, 613330.0, 606330.0,
            599663.0, 606333.0, 612999.0, 619333.0, 619333.0, 624667.0, 634967.0, 647967.0, 662633.0,
            672333.0, 679000.0, 676000.0, 679333.0, 684667.0, 693000.0, 693300.0, 689967.0, 691300.0,
            694333.0, 699333.0
        ]

        df = pd.DataFrame({
            "Date": dates,
            "For-Sale Inventory": inventory_data,
            "Median List Price": list_price_data
        })

        # Linear regression analysis
        model = LinearRegression()
        X = df[['For-Sale Inventory']]
        y = df['Median List Price']
        model.fit(X, y)

        # Predictions and statistics
        predictions = model.predict(X)
        mse = mean_squared_error(y, predictions)
        r_squared = r2_score(y, predictions)

        description = (
            f"In New York, our analysis of the relationship between the inventory of homes for sale "
            f"and median list prices shows a correlation coefficient (R-squared value) of {r_squared:.2f}. "
            f"This value suggests {'a strong' if r_squared > 0.7 else 'a moderate' if r_squared > 0.3 else 'a weak'} "
            f"relationship between the number of homes available and their median listing price.\n\n"
            f"According to the model, for every increase of 1,000 homes in the inventory, the median list price "
            f"is predicted to change by approximately ${model.coef_[0]:,.2f}. "
            f"This indicates {'an increase' if model.coef_[0] > 0 else 'a decrease'} in list prices as inventory levels fluctuate.\n\n"
            f"This simplified model helps stakeholders understand basic market dynamics and can aid in making informed decisions regarding real estate investments."
        )

        return description
