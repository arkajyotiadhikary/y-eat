// get current date
export const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
};
export const getCurrentDay = () => {
    const today = new Date();
    const options = { weekday: "long" };
    return today.toLocaleDateString("en-US");
};
