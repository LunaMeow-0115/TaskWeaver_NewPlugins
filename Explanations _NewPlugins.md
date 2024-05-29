<h1 align="center">TaskWeaver Custom Plugins for Housing Market Analysis</h1>
This repository contains two custom plugins, <strong>trend_analysis</strong> and <strong>forecast</strong>, developed for TaskWeaver. These plugins are designed to analyze and forecast housing market trends in New York, leveraging hardcoded historical data due to access restrictions.

<h2>Overview of Plugins</h2>
<h3>1. Trend Analysis Plugin</h3>
The <code>trend_analysis</code> plugin provides insights into quarter-to-quarter trends of listing prices for New York housing from 2021 to 2024. Due to limitations in file reading capabilities within the TaskWeaver environment, the data is hardcoded.

<strong>Features:</strong>

<ul>
<li>Uses a linear regression model suitable for trend analysis across any provided dataset.</li>
<li>Specifically targets New York housing data for the years 2021 to 2024.</li>
</ul>
<h3>2. Forecast Plugin</h3>
The <code>forecast</code> plugin predicts future listing prices for the next three to six months using a RandomForestRegressor model, selected due to compatibility issues with importing the Statsmodels package for SARIMAX modeling.

<strong>Features:</strong>

<ul>
<li>Capable of forecasting listing prices for the upcoming 3 or 6 months.</li>
<li>Adapts to data limitations by using hardcoded data.</li>
</ul>
<h2>Installation</h2>
<ol>
<li><strong>Clone the Repository:</strong>
<pre><code>git clone https://github.com/YourUsername/TaskWeaver_NewPlugins.git</code></pre></li>
<li><strong>Install Dependencies:</strong>
Navigate to the project directory and install the required Python packages:
<pre><code>pip install -r requirements.txt</code></pre></li>
<li><strong>Configure API Key:</strong>
Update the <code>taskweaver_config.json</code> with your OpenAI API key and preferred model type.</li>
</ol>
<h2>Usage</h2>
To run the plugins, execute the following command from the project root:

<pre><code>python -m taskweaver -p ./project/</code></pre>
<h3>Commands</h3>
<ul>
<li><strong>For Trend Analysis:</strong>
<pre><code>Analyze housing market trends for New York.</code></pre>
This command outputs a summary of housing price trends.</li>
<li><strong>For Forecasting:</strong>
<pre><code>Forecast listing price in next 3 months of houses in New York.</code></pre>
Adjust the time frame to 6 months if needed.</li>
</ul>
<h2>Note</h2>
<ul>
<li><strong>Data Access Limitations:</strong> Due to restricted access to real-time APIs and file reading errors, the plugins utilize hardcoded data sets.</li>
<li><strong>Model Selection:</strong> The intended SARIMAX model could not be used because of import issues with Statsmodels in the TaskWeaver environment, necessitating a fallback to RandomForestRegressor for the forecast plugin.</li>
</ul>
<h2>Demonstration</h2>
View a demo of the plugins in action <a href="https://drive.google.com/file/d/1_pVilgWv5WXtr2yW4Opxuj1YgLqmpOfQ/view?usp=sharing">here</a>.

For further assistance or queries, feel free to open an issue in this repository.
