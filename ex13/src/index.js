function main()
{
    var lastName = "Bezos";
    var thirdToLastLetterofLastName = lastName[lastName.length - 3];

    return thirdToLastLetterofLastName;
}

console.log(main());
module.exports = main;