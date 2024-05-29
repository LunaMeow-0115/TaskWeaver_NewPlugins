"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[776],{8930:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(5893),o=t(1151);const r={},i="Experience",s={id:"customization/experience",title:"Experience",description:"Motivation",source:"@site/docs/customization/experience.md",sourceDirName:"customization",slug:"/customization/experience",permalink:"/TaskWeaver/docs/customization/experience",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/docs/customization/experience.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Customizing Examples",permalink:"/TaskWeaver/docs/customization/example/"},next:{title:"Prompt Compression",permalink:"/TaskWeaver/docs/advanced/compression"}},c={},l=[{value:"Motivation",id:"motivation",level:2},{value:"How to use experience memory",id:"how-to-use-experience-memory",level:2},{value:"A walk-through example",id:"a-walk-through-example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"experience",children:"Experience"}),"\n",(0,a.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,a.jsx)(n.p,{children:"The agent developers can add examples to guide the planning and code generation.\nAlternatively, we also provide another way of saving user experiences to long-term memory.\nIn practice, if the user asks TaskWeaver to solve a hard problem.\nTaskWeaver can first go wrong. But after several attempts or the user gives more instructions,\nthe agent can finally solve the problem. However, next time, if the user asks a similar problem\nor even exactly the same problem. The agent is still hard to come up with the right solution\nat first because it does not memorize the experiences.  Therefore, we proposed a mechanism called experience memory.\nHere is the basic idea. A user can issue a command to TaskWeaver to save chat history and\nthen extract experience tips from it and save them into the experience pool.\nLater, when the agent sees similar requests, it will retrieve the experience from the memory\nto guide its planning and code generation.\nAn experience tip is about what should do or should not do when seeing a request like this.\nWe will add the retrieved experiences to the prompt when received a similar request afterward."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Save User Experience",src:t(2257).Z+"",width:"3868",height:"870"})}),"\n",(0,a.jsx)(n.h2,{id:"how-to-use-experience-memory",children:"How to use experience memory"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["To enable the experience feature, you only need to set the ",(0,a.jsx)(n.code,{children:"planner.use_experience"})," and ",(0,a.jsx)(n.code,{children:"code_generator.use_experience"})," parameter in the configuration file to ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Start a new conversation with TaskWeaver. You will find ",(0,a.jsx)(n.code,{children:"experience"})," directory is created in your project directory. Note that there is no experience now because we have not saved any chat history yet."]}),"\n",(0,a.jsxs)(n.li,{children:["If you think the current chat history is worth saving, you can save it by typing command ",(0,a.jsx)(n.code,{children:"/save"})," and you will find a new file named ",(0,a.jsx)(n.code,{children:"raw_exp_{session_id}.yaml"})," is created in the ",(0,a.jsx)(n.code,{children:"experience"})," directory."]}),"\n",(0,a.jsxs)(n.li,{children:["Restart TaskWeaver and start a new conversation. In the initialization stage, TaskWeaver will read the ",(0,a.jsx)(n.code,{children:"raw_exp_{session_id}.yaml"})," file and make a summarization in a new file named ",(0,a.jsx)(n.code,{children:"All_exp_{session_id}.yaml"}),". This process may take a while. ",(0,a.jsx)(n.code,{children:"All_"})," denotes that this experience will be loaded for Planner and CodeInterpreter."]}),"\n",(0,a.jsx)(n.li,{children:"When user send a similar query to TaskWeaver, it will retrieve the relevant experience and load it into the system prompt (for Planner and CodeInterpreter). In this way, the experience can be used to guide the future conversation."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"a-walk-through-example",children:"A walk-through example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:'Start a new conversation with TaskWeaver. Send a request "calculate the mean value of ./project/sample_data/data_demo.csv" to TaskWeaver.'}),"\n",(0,a.jsx)(n.li,{children:"You will find TaskWeaver made a mistake, calculating the mean value of the non-numerical column.\nAfter several attempts, TaskWeaver fixed this issue."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'=========================================================\n _____         _     _       __\n|_   _|_ _ ___| | _ | |     / /__  ____ __   _____  _____\n  | |/ _` / __| |/ /| | /| / / _ \\/ __ `/ | / / _ \\/ ___/\n  | | (_| \\__ \\   < | |/ |/ /  __/ /_/ /| |/ /  __/ /\n  |_|\\__,_|___/_|\\_\\|__/|__/\\___/\\__,_/ |___/\\___/_/\n=========================================================\n TaskWeaver \u25b6  I am TaskWeaver, an AI assistant. To get started, could you please enter your request?\n    Human   \u25b6   calculate the mean value of d:/demo_data.csv\n \u256d\u2500\u2500\u2500< Planner >\n \u251c\u2500\u25ba [init_plan]\n \u2502   1. load the data file\n \u2502   2. calculate the mean value of the loaded data <sequentially depends on 1>\n \u2502   3. report the result to the user <interactively depends on 2>\n \u251c\u2500\u25ba [plan]\n \u2502   1. instruct CodeInterpreter to load the data file and calculate the mean value of the loaded data\n \u2502   2. report the result to the user\n \u251c\u2500\u25ba [current_plan_step] 1. instruct CodeInterpreter to load the data file and calculate the mean value of the loaded data\n \u251c\u2500\u2500\u25cf Please load the data file d:/demo_data.csv and calculate the mean value of the loaded data\n \u2570\u2500\u2500\u25cf sending message to CodeInterpreter\n \u256d\u2500\u2500\u2500< CodeInterpreter >\n \u251c\u2500\u25ba [thought] ProgramApe will generate a code snippet to load the data file d:/demo_data.csv and calculate the mean value of the loaded data using pandas.\n \u251c\u2500\u25ba [python]\n \u2502   import pandas as pd\n \u2502   \n \u2502   data_file_path = "d:/demo_data.csv"\n \u2502   data_df = pd.read_csv(data_file_path)\n \u2502   mean_value = data_df.mean()\n \u2502   mean_value\n \u251c\u2500\u25ba [verification] NONE\n \u251c\u2500\u25ba [code_error] No code verification is performed.\n \u251c\u2500\u25ba [execution_status] FAILURE\n \u251c\u2500\u25ba [execution_result]\n \u2502   The execution of the generated python code above has failed\n \u2502   \n \u2502   During execution, the following messages were logged:\n \u2502   Traceback (most recent call last):\n \u2502   \n \u2502     Cell In[1], line 5\n \u2502       mean_value = data_df.mean()\n \u2502   \n \u2502     File D:\\python_project\\Octopus\\venv\\Lib\\site-packages\\pandas\\core\\frame.py:11335 in mean\n \u2502       result = super().mean(axis, skipna, numeric_only, **kwargs)\n \u2502   \n \u2502     File D:\\python_project\\Octopus\\venv\\Lib\\site-packages\\pandas\\core\\generic.py:11984 in mean\n \u2502       return self._stat_function(\n \u2502   \n \u2502     File D:\\python_project\\Octopus\\venv\\Lib\\site-packages\\pandas\\core\\generic.py:11941 in _stat_function\n \u2502       return self._reduce(\n \u2502   \n \u2502     File D:\\python_project\\Octopus\\venv\\Lib\\site-packages\\pandas\\core\\frame.py:11204 in _reduce\n \u2502       res = df._mgr.reduce(blk_func)\n \u2502   \n \u2502     File D:\\python_project\\Octopus\\venv\\Lib\\site-packages\\pandas\\core\\internals\\managers.py:1459 in reduce\n \u2502       nbs = blk.reduce(func)\n \u2502   \n \u2502     File D:\\python_project\\Octopus\\venv\\Lib\\site-packages\\pandas\\core\\internals\\blocks.py:377 in reduce\n \u2502       result = func(self.values)\n \u2502   \n \u2502     File D:\\python_project\\Octopus\\venv\\Lib\\site-packages\\pandas\\core\\frame.py:11136 in blk_func\n \u2502       ret\n \u2502   \n \u251c\u2500\u25ba [artifact_paths] []\n \u251c\u2500\u2500\u25cf The following python code has been executed:\n \u2502   ```python\n \u2502   import pandas as pd\n \u2502   \n \u2502   data_file_path = "d:/demo_data.csv"\n \u2502   data_df = pd.read_csv(data_file_path)\n \u2502   mean_value = data_df.mean()\n \u2502   mean_value\n \u2502   ```\n \u2502   \n \u2502   \n \u2502   The execution of the generated python code above has failed\n \u2502   \n \u2502   During execution, the following messages were logged:\n \u2502   Traceback (most recent call last):\n \u2502   \n \u2502     Cell In[1], line 5\n \u2502       mean_value = data_df.mean()\n \u2502   \n \u2502     File D:\\python_project\\Octopus\\venv\\Lib\\site-packages\\pandas\\core\\frame.py:11335 in mean\n \u2502       result = super().mean(axis, skipna, numeric_only, **kwargs)\n \u2502   \n \u2502     File D:\\python_project\\Octopus\\venv\\Lib\\site-packages\\pandas\\core\\generic.py:11984 in mean\n \u2502       return self._stat_function(\n \u2502   \n \u2502     File D:\\python_project\\Octopus\\venv\\Lib\\site-packages\\pandas\\core\\generic.py:11941 in _stat_function\n \u2502       return self._reduce(\n \u2502   \n \u2502     File D:\\python_project\\Octopus\\venv\\Lib\\site-packages\\pandas\\core\\frame.py:11204 in _reduce\n \u2502       res = df._mgr.reduce(blk_func)\n \u2502   \n \u2502     File D:\\python_project\\Octopus\\venv\\Lib\\site-packages\\pandas\\core\\internals\\managers.py:1459 in reduce\n \u2502       nbs = blk.reduce(func)\n \u2502   \n \u2502     File D:\\python_project\\Octopus\\venv\\Lib\\site-packages\\pandas\\core\\internals\\blocks.py:377 in reduce\n \u2502       result = func(self.values)\n \u2502   \n \u2502     File D:\\python_project\\Octopus\\venv\\Lib\\site-packages\\pandas\\core\\frame.py:11136 in blk_func\n \u2502       ret\n \u2502   \n \u251c\u2500\u25ba [revise_message]\n \u2502   The execution of the previous generated code has failed. If you think you can fix the problem by rewriting the code, please generate code and run it again.\n \u2502   Otherwise, please explain the problem to me.\n \u2570\u2500\u2500\u25cf sending message to CodeInterpreter\n \u256d\u2500\u2500\u2500< CodeInterpreter >\n \u251c\u2500\u25ba [thought] ProgramApe will generate a code snippet to load the data file d:/demo_data.csv and calculate the mean value of the loaded data using pandas, considering the execution \n \u2502   error.\n \u251c\u2500\u25ba [python]\n \u2502   import pandas as pd\n \u2502   \n \u2502   data_file_path = "d:/demo_data.csv"\n \u2502   data_df = pd.read_csv(data_file_path)\n \u2502   mean_value = data_df.mean(axis=0, numeric_only=True)\n \u2502   mean_value\n \u251c\u2500\u25ba [verification] NONE\n \u251c\u2500\u25ba [code_error] No code verification is performed.\n \u251c\u2500\u25ba [execution_status] SUCCESS\n \u251c\u2500\u25ba [execution_result]\n \u2502   The execution of the generated python code above has succeeded\n \u2502   \n \u2502   The result of above Python code after execution is:\n \u2502   Count    78172.75\n \u2502   dtype: float64\n \u251c\u2500\u25ba [artifact_paths] []\n \u251c\u2500\u2500\u25cf The following python code has been executed:\n \u2502   ```python\n \u2502   import pandas as pd\n \u2502   \n \u2502   data_file_path = "d:/demo_data.csv"\n \u2502   data_df = pd.read_csv(data_file_path)\n \u2502   mean_value = data_df.mean(axis=0, numeric_only=True)\n \u2502   mean_value\n \u2502   ```\n \u2502   \n \u2502   \n \u2502   The execution of the generated python code above has succeeded\n \u2502   \n \u2502   The result of above Python code after execution is:\n \u2502   Count    78172.75\n \u2502   dtype: float64\n \u2570\u2500\u2500\u25cf sending message to Planner\n \u256d\u2500\u2500\u2500< Planner >\n \u251c\u2500\u25ba [init_plan]\n \u2502   1. load the data file\n \u2502   2. calculate the mean value of the loaded data <sequentially depends on 1>\n \u2502   3. report the result to the user <interactively depends on 2>\n \u251c\u2500\u25ba [plan]\n \u2502   1. instruct CodeInterpreter to load the data file and calculate the mean value of the loaded data\n \u2502   2. report the result to the user\n \u251c\u2500\u25ba [current_plan_step] 2. report the result to the user\n \u251c\u2500\u2500\u25cf The mean value of the data in d:/demo_data.csv is 78172.75\n \u2570\u2500\u2500\u25cf sending message to User\n TaskWeaver \u25b6  The mean value of the data in d:/demo_data.csv is 78172.75\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["We can issue the ",(0,a.jsx)(n.code,{children:"/save"})," command from the console chat interface to save the chat history. Then, after we restart TaskWeaver,\nwe can see the experience summarized from the last chat history is below:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'exp_id: 20231228-073922-9b411afd\nexperience_text: "User Query: get the mean value of d:/demo_data.csv\n  Error Resolution:\n  - Error 1: The initial code failed to execute because it tried to calculate the mean value of all columns, including non-numeric columns.\n  - Resolution 1: The code was revised to check for non-numeric columns and only calculate the mean value for numeric columns.\n  Preferences:\n  - Preference 1: The user prefers to calculate the mean value of the "Count" column in the data."\nraw_experience_path: D:\\project\\experience\\raw_exp_20231228-073922-9b411afd.yaml\nembedding_model: text-embedding-ada-002\nembedding: ...\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:'Send a similar request "calculate the variance value of ./project/sample_data/data_demo.csv" to TaskWeaver. You will find TaskWeaver will not make the same mistake again. It will ask User to confirm the column name to calculate the variance value.'}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"=========================================================\n _____         _     _       __\n|_   _|_ _ ___| | _ | |     / /__  ____ __   _____  _____\n  | |/ _` / __| |/ /| | /| / / _ \\/ __ `/ | / / _ \\/ ___/\n  | | (_| \\__ \\   < | |/ |/ /  __/ /_/ /| |/ /  __/ /\n  |_|\\__,_|___/_|\\_\\|__/|__/\\___/\\__,_/ |___/\\___/_/\n=========================================================\n TaskWeaver \u25b6  I am TaskWeaver, an AI assistant. To get started, could you please enter your request?\n    Human   \u25b6  calculate the variance value of d:/demo_data.csv\n \u256d\u2500\u2500\u2500< Planner >TaskWeaver] preparing     <=\ufffd=>     \n \u251c\u2500\u25ba [init_plan]\n \u2502   1. load the data file\n \u2502   2. confirm the columns to calculate variance <interactively depends on 1>\n \u2502   3. calculate the variance value for the selected columns <sequentially depends on 2>\n \u2502   4. report the result to the user <interactively depends on 3>\n \u251c\u2500\u25ba [plan] \u25b6 [Planner][plan] 1. instruct CodeInterpreter to load the data file 2. confirm the columns to calcu    <=\ufffd=>      \n \u2502   1. instruct CodeInterpreter to load the data file\n \u2502   2. confirm the columns to calculate variance\n \u251c\u2500\u25ba [current_plan_step] 1. instruct CodeInterpreter to load the data file load the data file        <=\ufffd=>  \n \u251c\u2500\u2500\u25cf Please load the data file d:/demo_data.csva file d:/demo_dat <=\ufffd=>         \n \u2570\u2500\u2500\u25cf sending message to CodeInterpreter\n \u256d\u2500\u2500\u2500< CodeInterpreter >\n \u251c\u2500\u25ba [thought] ProgramApe will generate a code snippet to load the data file d:/demo_data.csv using pandas.demo_data.csv using panda     <=\ufffd=>     \n \u251c\u2500\u25ba [python]\u25b6 [CodeInterpreter][python] import pandas as pd  data_file_path = \"d:/demo_data.csv\" df = pd.read_csv(data_fil      <=\ufffd=>    \n \u2502   import pandas as pd\n \u2502   \n \u2502   data_file_path = \"d:/demo_data.csv\"\n \u2502   df = pd.read_csv(data_file_path)\n \u2502   df\n \u251c\u2500\u25ba [verification] NONE\n \u251c\u2500\u25ba [code_error] No code verification is performed.\n \u251c\u2500\u25ba [execution_status] SUCCESS] executing code       <=\ufffd=>   \n \u251c\u2500\u25ba [execution_result]\n \u2502   The execution of the generated python code above has succeeded\n \u2502   \n \u2502   The result of above Python code after execution is:\n \u2502                  TimeBucket  Count\n \u2502   0    2023-02-01T00:00:00Z  67814\n \u2502   1    2023-02-01T04:00:00Z  84569\n \u2502   ..                    ...    ...\n \u2502   718  2023-05-31T16:00:00Z  89912\n \u2502   719  2023-05-31T20:00:00Z  87249\n \u2502   \n \u2502   [720 rows x 2 columns]\n \u251c\u2500\u25ba [artifact_paths] []\n \u251c\u2500\u2500\u25cf The following python code has been executed:\n \u2502   ```python\n \u2502   import pandas as pd\n \u2502   \n \u2502   data_file_path = \"d:/demo_data.csv\"\n \u2502   df = pd.read_csv(data_file_path)\n \u2502   df\n \u2502   ```\n \u2502   \n \u2502   \n \u2502   The execution of the generated python code above has succeeded\n \u2502   \n \u2502   The result of above Python code after execution is:\n \u2502                  TimeBucket  Count\n \u2502   0    2023-02-01T00:00:00Z  67814\n \u2502   1    2023-02-01T04:00:00Z  84569\n \u2502   ..                    ...    ...\n \u2502   718  2023-05-31T16:00:00Z  89912\n \u2502   719  2023-05-31T20:00:00Z  87249\n \u2502   \n \u2502   [720 rows x 2 columns]\n \u2570\u2500\u2500\u25cf sending message to Planner\n \u256d\u2500\u2500\u2500< Planner >CodeInterpreter] finished  <=\ufffd=>        \n \u251c\u2500\u25ba [init_plan]\n \u2502   1. load the data file\n \u2502   2. confirm the columns to calculate variance <interactively depends on 1>\n \u2502   3. calculate the variance value for the selected columns <sequentially depends on 2>\n \u2502   4. report the result to the user <interactively depends on 3>\n \u251c\u2500\u25ba [plan] \u25b6 [Planner][plan] 1. instruct CodeInterpreter to load the data file 2. confirm the columns to calculate var       <=\ufffd=>   \n \u2502   1. instruct CodeInterpreter to load the data file\n \u2502   2. confirm the columns to calculate variance\n \u251c\u2500\u25ba [current_plan_step] 2. confirm the columns to calculate variance calculate varia      <=\ufffd=>    \n \u251c\u2500\u2500\u25cf The data file d:/demo_data.csv is loaded. The columns in the data are:\n \u2502   \n \u2502   1. TimeBucket\n \u2502   2. Count\n \u2502   \n \u2502   Please specify which column(s) you would like to calculate the variance for.\n \u2570\u2500\u2500\u25cf sending message to User\n TaskWeaver \u25b6  The data file d:/demo_data.csv is loaded. The columns in the data are:\n\n1. TimeBucket\n2. Count\n\nPlease specify which column(s) you would like to calculate the variance for.\n\nHuman   \u25b6  Count\n \u256d\u2500\u2500\u2500< Planner >TaskWeaver] preparing    <=\ufffd=>      \n \u251c\u2500\u25ba [init_plan]\n \u2502   1. load the data file\n \u2502   2. confirm the columns to calculate variance <interactively depends on 1>\n \u2502   3. calculate the variance value for the selected columns <sequentially depends on 2>\n \u2502   4. report the result to the user <interactively depends on 3>\n \u251c\u2500\u25ba [plan]\n \u2502   1. instruct CodeInterpreter to load the data file\n \u2502   2. confirm the columns to calculate variance\n \u2502   3. instruct CodeInterpreter to calculate the variance value for the Count column\n \u2502   4. report the result to the user\n \u251c\u2500\u25ba [current_plan_step] 3. instruct CodeInterpreter to calculate the variance value for the Count columnor the Count col  <=\ufffd=>        \n \u251c\u2500\u2500\u25cf Please calculate the variance value for the Count column in the loaded datalumn in the loaded          <=\ufffd=>\n \u2570\u2500\u2500\u25cf sending message to CodeInterpreter\n \u256d\u2500\u2500\u2500< CodeInterpreter >\n \u251c\u2500\u25ba [thought] ProgramApe will generate a code snippet to calculate the variance value for the Count column in the loaded data. column in the loaded dat <=\ufffd=>         \n \u251c\u2500\u25ba [python]\u25b6 [CodeInterpreter][python] variance_count = df['Count'].var() varia     <=\ufffd=>     \n \u2502   variance_count = df['Count'].var()\n \u2502   variance_count\n \u251c\u2500\u25ba [verification] NONE\n \u251c\u2500\u25ba [code_error] No code verification is performed.\n \u251c\u2500\u25ba [execution_status] SUCCESS] executing code        <=\ufffd=>  \n \u251c\u2500\u25ba [execution_result]\n \u2502   The execution of the generated python code above has succeeded\n \u2502   \n \u2502   The result of above Python code after execution is:\n \u2502   263514550.45479834\n \u251c\u2500\u25ba [artifact_paths] []\n \u251c\u2500\u2500\u25cf The following python code has been executed:\n \u2502   ```python\n \u2502   variance_count = df['Count'].var()\n \u2502   variance_count\n \u2502   ```\n \u2502   \n \u2502   \n \u2502   The execution of the generated python code above has succeeded\n \u2502   \n \u2502   The result of above Python code after execution is:\n \u2502   263514550.45479834\n \u2570\u2500\u2500\u25cf sending message to Planner\n \u256d\u2500\u2500\u2500< Planner >CodeInterpreter] finished         <=\ufffd=> \n \u251c\u2500\u25ba [init_plan]\n \u2502   1. load the data file\n \u2502   2. confirm the columns to calculate variance <interactively depends on 1>\n \u2502   3. calculate the variance value for the selected columns <sequentially depends on 2>\n \u2502   4. report the result to the user <interactively depends on 3>\n  \u251c\u2500\u25ba [plan]\n \u2502   1. instruct CodeInterpreter to load the data file\n \u2502   2. confirm the columns to calculate variance\n \u2502   3. instruct CodeInterpreter to calculate the variance value for the Count column\n \u2502   4. report the result to the user\n \u251c\u2500\u25ba [current_plan_step] 4. report the result to the user result to the u       <=\ufffd=>   \n \u251c\u2500\u2500\u25cf The variance value for the Count column in the data file d:/demo_data.csv is 263,514,550.45a.csv is 263,51    <=\ufffd=>      \n \u2570\u2500\u2500\u25cf sending message to User\n TaskWeaver \u25b6  The variance value for the Count column in the data file d:/demo_data.csv is 263,514,550.45\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2257:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/experience-5ebc96cdfbfb9eeca4cb845c1f61c90a.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var a=t(7294);const o={},r=a.createContext(o);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);