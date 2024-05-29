<h1 align="center">TaskWeaver Custom Plugins for Housing Market Analysis</h1>
I added two custom plugins, <strong>trend_analysis</strong> and <strong>forecast</strong>, all files are in <strong>project/plugins</strong> folder. These plugins are designed to analyze and forecast housing market trends in New York.

<h2>Demo</h2>
View a demo of the plugins in action <a href="https://drive.google.com/file/d/1_pVilgWv5WXtr2yW4Opxuj1YgLqmpOfQ/view?usp=sharing">here</a>.

<h2>Overview of Plugins</h2>
<h3>1. Trend Analysis Plugin</h3>
The <code>trend_analysis</code> plugin provides insights into quarter-to-quarter trends of listing prices for New York housing from 2021-03-31 to 2024-04-30. Due to limitations in file reading capabilities within the TaskWeaver environment, the data is hardcoded, and so the plugin can only predict data for New York. However, the linear regression model is capable of analyzing and predicting trends across various states and time periods technically.
Additionally, Zillow Group refused my request of requrieing an api key for their Econ Data, so I could not create a plugin using api to require the latest pricing data for New York.

<h3>2. Forecast Plugin</h3>
The <code>forecast</code> plugin predicts future listing prices for the next few months (you can input the number of months you want to forecast) using a RandomForestRegressor model, selected due to compatibility issues with importing the Statsmodels package for SARIMAX modeling. However, the SARIMAX model's results (which are more accurate) and codes are attacted in the comment.

<h2>Steps</h2>
<ol>
<li>Update the <code>project/taskweaver_config.json</code> with your OpenAI API key and preferred model type.</li>
<li>To run the plugins, execute the following command from the project root: <pre><code>python -m taskweaver -p ./project/</code></pre></li>
<li><strong>For <strong>trend_analysis</strong>, prompt:</strong>
<pre><code>Analyze housing market trends for New York.</code></pre>
This command outputs a summary of housing price trends.</li>
<li><strong>For <strong>forecast</strong>, prompt:</strong>
<pre><code>Forecast listing price in next 3 months of houses in New York.</code></pre>
Adjust the time frame if needed.</li>
</ol>

<h2>Note</h2>
<ul>
<li>If you cannot get the answer at the first time of prompting, please try it for a second time.</li>
</ul>

