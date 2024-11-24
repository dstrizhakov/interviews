/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0); // Создаем фиктивный узел, который будет головой нового списка
    let current = dummyHead; // Указатель для создания нового списка
    let carry = 0; // Перенос из предыдущего шага

    while (l1 !== null || l2 !== null || carry !== 0) {
        // Суммируем значения текущих узлов, если они есть
        let sum = carry;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next; // Переходим к следующему узлу в списке l1
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next; // Переходим к следующему узлу в списке l2
        }

        // Обновляем перенос и создаем новый узел со значением остатка от деления на 10
        carry = Math.floor(sum / 10); // Перенос
        current.next = new ListNode(sum % 10); // Новый узел с цифрой
        current = current.next; // Переходим к следующему узлу

    }

    return dummyHead.next; // Возвращаем голову нового списка (без фиктивного узла)
};
