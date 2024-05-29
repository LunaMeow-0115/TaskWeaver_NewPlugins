from taskweaver.plugin import Plugin, register_plugin
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split


@register_plugin
class ForecastPlugin(Plugin):
    def __call__(self, forecast_steps: int = 3):

        """
        This plugin uses the RandomForestRegressor model to predict future list prices from historical data on inventory levels, list prices, sales counts, and sales prices. Designed to support real estate decision-making, it offers insights into future market trends by training on historical data and forecasting list prices for a specified number of future months.
        Parameters:
        forecast_steps (int): Specifies how many future months to forecast.
        Returns:
        str: A formatted string detailing the predicted list prices for the forecasted months.
        """
        
        # Data are in dictionary
        data_dict = {'Date': ['2018-08-31', '2018-09-30', '2018-10-31', '2018-11-30', '2018-12-31', '2019-01-31', '2019-02-28', '2019-03-31', '2019-04-30', '2019-05-31', '2019-06-30', '2019-07-31', '2019-08-31', '2019-09-30', '2019-10-31', '2019-11-30', '2019-12-31', '2020-01-31', '2020-02-29', '2020-03-31', '2020-04-30', '2020-05-31', '2020-06-30', '2020-07-31', '2020-08-31', '2020-09-30', '2020-10-31', '2020-11-30', '2020-12-31', '2021-01-31', '2021-02-28', '2021-03-31', '2021-04-30', '2021-05-31', '2021-06-30', '2021-07-31', '2021-08-31', '2021-09-30', '2021-10-31', '2021-11-30', '2021-12-31', '2022-01-31', '2022-02-28', '2022-03-31', '2022-04-30', '2022-05-31', '2022-06-30', '2022-07-31', '2022-08-31', '2022-09-30', '2022-10-31', '2022-11-30', '2022-12-31', '2023-01-31', '2023-02-28', '2023-03-31', '2023-04-30', '2023-05-31', '2023-06-30', '2023-07-31', '2023-08-31', '2023-09-30', '2023-10-31', '2023-11-30', '2023-12-31', '2024-01-31', '2024-02-29', '2024-03-31'], 
                     'Inventory': [91251.0, 90049.0, 89339.0, 87186.0, 81944.0, 76678.0, 74497.0, 78192.0, 84211.0, 91255.0, 95966.0, 97260.0, 95383.0, 93359.0, 91309.0, 87828.0, 80727.0, 74301.0, 72005.0, 74371.0, 72270.0, 70474.0, 70352.0, 77012.0, 81547.0, 82809.0, 80976.0, 77001.0, 70532.0, 65541.0, 61868.0, 61966.0, 62738.0, 65965.0, 68986.0, 70650.0, 70786.0, 69101.0, 67467.0, 63984.0, 57820.0, 50768.0, 46430.0, 48039.0, 51340.0, 55710.0, 58872.0, 61312.0, 61386.0, 60262.0, 58241.0, 55450.0, 50400.0, 45916.0, 42796.0, 43253.0, 44197.0, 45829.0, 46198.0, 45506.0, 43956.0, 42515.0, 42586.0, 42068.0, 39540.0, 36461.0, 34858.0, 36244.0], 
                     'List Price': [526600.0, 526267.0, 527600.0, 529000.0, 527667.0, 524667.0, 524667.0, 528000.0, 537667.0, 544333.0, 549000.0, 547667.0, 544333.0, 544333.0, 545667.0, 549000.0, 549300.0, 549300.0, 549300.0, 552333.0, 555967.0, 559300.0, 561300.0, 566333.0, 574967.0, 584967.0, 592967.0, 597967.0, 599600.0, 596600.0, 594967.0, 594667.0, 597667.0, 598667.0, 595633.0, 589267.0, 579600.0, 574633.0, 574333.0, 576333.0, 576333.0, 576667.0, 584550.0, 592550.0, 603550.0, 610667.0, 617667.0, 613330.0, 606330.0, 599663.0, 606333.0, 612999.0, 619333.0, 619333.0, 624667.0, 634967.0, 647967.0, 662633.0, 672333.0, 679000.0, 676000.0, 679333.0, 684667.0, 693000.0, 693300.0, 689967.0, 691300.0, 694333.0], 
                     'Sales Count': [21963.0, 16421.0, 18565.0, 16336.0, 15876.0, 14322.0, 11935.0, 14140.0, 15003.0, 17348.0, 18357.0, 20056.0, 20229.0, 17059.0, 17717.0, 15164.0, 16746.0, 15380.0, 12959.0, 13515.0, 10642.0, 11137.0, 13674.0, 16852.0, 19154.0, 20277.0, 22858.0, 20164.0, 23486.0, 20195.0, 17285.0, 21612.0, 19714.0, 19390.0, 24520.0, 24015.0, 24812.0, 21987.0, 22566.0, 20348.0, 21491.0, 19126.0, 15744.0, 19007.0, 17002.0, 18457.0, 21849.0, 19975.0, 21205.0, 17293.0, 15475.0, 14672.0, 13501.0, 11435.0, 10017.0, 12371.0, 10996.0, 13241.0, 15441.0, 13762.0, 15830.0, 13321.0, 12754.0, 10698.0, 10419.0, 9922.0, 8549.0, 9564.0], 
                     'Sales Price': [386493.0, 390054.0, 389141.0, 390999.0, 386268.0, 385566.0, 385298.0, 385209.0, 388252.0, 386552.0, 389110.0, 388335.0, 389614.0, 390201.0, 394318.0, 400141.0, 404898.0, 408027.0, 409521.0, 411827.0, 417023.0, 419118.0, 416715.0, 410687.0, 410663.0, 421685.0, 437051.0, 452074.0, 458474.0, 462734.0, 467696.0, 473425.0, 479566.0, 480588.0, 486433.0, 490735.0, 497659.0, 499760.0, 501094.0, 501440.0, 502764.0, 503558.0, 506699.0, 511003.0, 517359.0, 523376.0, 530372.0, 537807.0, 538817.0, 535065.0, 529724.0, 525504.0, 519867.0, 519537.0, 518720.0, 520927.0, 522886.0, 531022.0, 540796.0, 549891.0, 560712.0, 564490.0, 564674.0, 561996.0, 564092.0, 569061.0, 570293.0, 575110.0]}
        
        # Convert data_dict to data frame
        dates = pd.to_datetime(data_dict['Date'])
        df = pd.DataFrame(data={
            'Inventory': data_dict['Inventory'],
            'List Price': data_dict['List Price'],
            'Sales Count': data_dict['Sales Count'],
            'Sales Price': data_dict['Sales Price']
        }, index=dates)
        df.index = pd.DatetimeIndex(df.index, freq='M')

        """
        # SARIAMX MODEL is more accurate, but I failed to show it because I could not successfullly import statsmodels in TaskWeaver.
        # The results are:
        # Forecasted List Prices:
        # 2024-04-30: $711303.20
        # 2024-05-31: $720950.92
        # 2024-06-30: $727460.76
        # 2024-07-31: $734237.21
        # 2024-08-31: $729134.70
        # 2024-09-30: $736016.63
        # ...


        # Exog variables
        exog_vars = df[['Inventory', 'Sales Count', 'Sales Price']]

        # Model
        sarimax_model = SARIMAX(df['List Price'], exog=exog_vars, order=(1, 1, 1), seasonal_order=(1, 1, 1, 12))
        results = sarimax_model.fit(disp=False)

        # Forcast
        forecast = results.get_forecast(steps=forecast_steps, exog=exog_vars.iloc[-forecast_steps:])

        # Return
        summary_frame = forecast.summary_frame()
        forecast_dates = summary_frame.index.strftime('%Y-%m-%d').tolist()
        mean_values = summary_frame['mean'].tolist()
        forecast_string = "Forecasted List Prices:\n"
        forecast_string += "\n".join([f"{date}: ${mean:.2f}" for date, mean in zip(forecast_dates, mean_values)])  

        return forecast_string
        """

        # Prepare data for model
        X = df.drop('List Price', axis=1)
        y = df['List Price']

        # Train-test split
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, shuffle=False)

        # Model initialization and fitting
        model = RandomForestRegressor(n_estimators=100, random_state=42)
        model.fit(X_train, y_train)

        # Forecasting
        forecast_indices = pd.date_range(start=X_train.index[-1], periods=forecast_steps + 1, freq='M')[1:]
        X_forecast = X.reindex(forecast_indices)
        predictions = model.predict(X_forecast)

        # Formatting forecast results
        forecast_dates = forecast_indices.strftime('%Y-%m-%d').tolist()
        forecast_string = "Forecasted List Prices:\n"
        forecast_string += "\n".join([f"{date}: ${price:.2f}" for date, price in zip(forecast_dates, predictions)])

        return forecast_string




