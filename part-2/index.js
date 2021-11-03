const Tweet = ({username, date, msg}) => (
    <div>
        Username: {username}<br></br>
        Date: {date}<br></br>
        <p>
            {msg}
        </p>
    </div>
);


const App = () => (
    <div>
        <Tweet username="Bobby" date={new Date().toDateString()} msg="How dare u2"/>
        <Tweet username="Bobby2" date={new Date().toDateString()} msg="How dare u3"/>
        <Tweet username="Bobby3" date={new Date().toDateString()} msg="How dare u5"/>
    </div>
);

ReactDOM.render(<App/>,
    document.getElementById("root"));