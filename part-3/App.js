const App = () => {
    const hobbyList1 = ['Fighting', 'Farting'];
    const hobbyList2 = ['Eating', 'Shoving'];
    const hobbyList3 = ['Abs Nada'];
    return (
    <div>
        <Person age={17} name="Lil Grill" hobbies={hobbyList1}/>
        <Person age={23} name="Mace Windu the bo" hobbies={hobbyList2}/>
        <Person age={23} name="Mace" hobbies={hobbyList3}/>
    </div>
    );
};
