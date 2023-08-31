let lists = document.querySelectorAll('.list');
let rightBox = document.querySelector('#right');
let leftBox = document.querySelector('#left');

for (let list of lists) {
  list.addEventListener("dragstart", function () {
    rightBox.addEventListener("dragover", function (event) {
      event.preventDefault();
    });
    leftBox.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    let selected = list;
    rightBox.ondrop = function () {
      rightBox.appendChild(selected);
      selected = null;
    };
    leftBox.ondrop = function () {
      leftBox.appendChild(selected);
      selected = null;
    };
  })
};

// /* From Saber */
// for (let list of lists) {
//   list.addEventListener("dragstart", function () {
//     rightBox.addEventListener("dragover", stopPropagation);
//     leftBox.addEventListener("dragover", stopPropagation);

//     let selected = list;
//     appendNodeInParent(rightBox, selected)
//     appendNodeInParent(leftBox, selected)
//   })
// };
// function stopPropagation(event) {
//   event.preventDefault();
// }
// function appendNodeInParent(parent, node) {
//   parent.addEventListener('drop',  function () {
//     parent.appendChild(node);
//     node = null;
//   });
// }