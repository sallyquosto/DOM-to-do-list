// declare variable to track theme
let lightTheme = true;
// set variable to get our input value
const task = document.getElementById('task');
// set a variable to count our tasks
let taskCount = 0;
// variable to target our listArea to hold all our tasks
const listArea = document.getElementById('listArea');
// toggle theme function to toggle between light and dark theme
function toggleTheme() {
    // declare variable to target our body element
    const bodyEl = document.querySelector('body');
    // add our dark theme class to the body
    bodyEl.classList.toggle('darkTheme');
    // we need to dynamically change text of the button
    const btnEl = document.querySelector('.navBtn');
// if our variable lightTheme is true, we set false, if it is false we'll set it to true
    lightTheme = !lightTheme;
    // based on our lightTheme value we set our button text
    if (lightTheme) {
        btnEl.innerText = 'Dark';
    } else {
        btnEl.innerText = 'Light';
    }
}
// our add task function
function addTask() {
    // set variable for the p tag that we will create
    // a side note - below we make a p tag because that is what the instructions called for
    // however, to make it easier we could have our target container on our HTML be a ol tag
    // and here we would make an li element instead of p element
    // if we did this we would not need the counter variable, as an ordered list (ol) automatically numbers the items
    // this would also automatically update our list numbering if we remove one
    // I suggest you try it out and see how it works if you make those changes
    const taskItem = document.createElement('p');
    // lets get the value of our input
    const taskDescription = task.value;
    // add our taskItem class to this p element
    taskItem.classList.add('taskItem');
    // add eventlistener to each p element that we add
    taskItem.addEventListener('click', deleteTask);
    // increase our task count
    taskCount++;
    // set our innerHTML of our new P tag
    taskItem.innerHTML = `${taskCount}. ${taskDescription}`;
    // we need to append our new p element to the page
    listArea.append(taskItem);
    // to clear the text from our input, we can reset that to an empty string
    task.value = '';
}
// our clear task function will delete all tasks from the page and reset our counter to zero
function clearTasks() {
    const allTasks = document.querySelectorAll('.taskItem');
    allTasks.forEach((task) => task.remove());
    taskCount = 0;
}
// our delete task function, deletes the task we click on
function deleteTask(event) {
    event.target.remove();
}