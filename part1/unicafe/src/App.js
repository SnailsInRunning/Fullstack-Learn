import { useState } from 'react';

const Title = ({ text }) => <h1>{text}</h1>;

const Statistics = (props) => {
    const { statisticsObj } = props;
    let statisticsList = [];
    for (const key in statisticsObj) {
        if (statisticsObj.hasOwnProperty(key)) {
            statisticsList.push(<tr key={key}><td>{key}</td><td>{statisticsObj[key]}</td></tr>)
        }
    }
    return <table><tbody>{statisticsList}</tbody></table>;
};

const ButtonElement = ({ buttonObj }) => {
    let buttonList = [];
    for (const key in buttonObj) {
        if (buttonObj.hasOwnProperty(key)) {
            buttonList.push(<button onClick={buttonObj[key]} text={key} key={key}>{key}</button>);
        }
    }
    return buttonList;
}

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const all = good + neutral + bad;
    const average = (good*1 + neutral*0 + bad*(-1))/(all);
    const positive = `${(good/all)*100}%`;

    const buttonObj = {
        good: () => setGood(good + 1),
        neutral: () => setNeutral(neutral + 1),
        bad: () => setBad(bad + 1)
    };

    const statisticsObj = { good, neutral, bad, all, average, positive };

    return (
        <div>
            <Title text={"give feedback"} />
            <ButtonElement buttonObj={buttonObj} />
            <Title text={"statistics"} />
            {all ? <Statistics statisticsObj={statisticsObj} />: "No feedback given"}
        </div>
    )
};

export default App;
