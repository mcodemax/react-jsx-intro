/**I:hobbies is an arr of strings */
const Person = ({age, name, hobbies}) => {
    const htmlName = name.length > 8 ? name.substring(0,6) : name;
    const ageBanner = age >= 18 ? <h3>please go vote!</h3> : <h3>you must be 18</h3>;
    return (
        <div>
                <p>Learn some information about this person</p><br></br>
                <ul>{hobbies.map(item => <li>{item}</li>)}
                </ul>
                {ageBanner}
                <h3>{htmlName}</h3>
        </div>
    )
};

