"use strict"

$(".summa").focus(function () => {
            let sum = 0;

            let a = prompt("Введите номер типа сайта который вы хотели бы приобрести: 1- Визитка(10к), 2- Корп(20к), 3-Магаз(30к)", "1");

            if (a == 1) {
                sum = sum + 10000;
                let b = prompt("Введите номер типа сайта который вы хотели бы приобрести: 1- Уник(10к), 2- Шабл(20к), 3-Вау(30к)", "2");
                if (b == 1) {
                    sum = sum + 10000;
                    let c = prompt("Введите номер типа сайта который вы хотели бы приобрести: 1- Адаптивная(10к), 2- Неадаптивная(20к), 3-Вегетативная(30к)", "3");
                    if (c == 1) {
                        sum = sum + 10000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    } else if (c == 2) {
                        sum = sum + 20000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    } else if (c == 3) {
                        sum = sum + 30000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    }
                } else if (b == 2) {
                    sum = sum + 20000;
                    let c = prompt("Введите номер типа сайта который вы хотели бы приобрести: 1- Адаптивная(10к), 2- Неадаптивная(20к), 3-Вегетативная(30к)", "3");
                    if (c == 1) {
                        sum = sum + 10000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    } else if (c == 2) {
                        sum = sum + 20000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    } else if (c == 3) {
                        sum = sum + 30000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    }
                } else if (b == 3) {
                    sum = sum + 30000;
                    let c = prompt("Введите номер типа сайта который вы хотели бы приобрести: 1- Адаптивная(10к), 2- Неадаптивная(20к), 3-Вегетативная(30к)", "3");
                    if (c == 1) {
                        sum = sum + 10000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    } else if (c == 2) {
                        sum = sum + 20000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    } else if (c == 3) {
                        sum = sum + 30000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    }
                }

            }

            if (a == 2) {
                sum = sum + 20000;
                let b = prompt("Введите номер типа сайта который вы хотели бы приобрести: 1- Уник(10к), 2- Шабл(20к), 3-Вау(30к)", "1");
                if (b == 1) {
                    sum = sum + 10000;
                    let c = prompt("Введите номер типа сайта который вы хотели бы приобрести: 1- Адаптивная(10к), 2- Неадаптивная(20к), 3-Вегетативная(30к)", "3");
                    if (c == 1) {
                        sum = sum + 10000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    } else if (c == 2) {
                        sum = sum + 20000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    } else if (c == 3) {
                        sum = sum + 30000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    }
                } else if (b == 2) {
                    sum = sum + 20000;
                    let c = prompt("Введите номер типа сайта который вы хотели бы приобрести: 1- Адаптивная(10к), 2- Неадаптивная(20к), 3-Вегетативная(30к)", "3");
                    if (c == 1) {
                        sum = sum + 10000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    } else if (c == 2) {
                        sum = sum + 20000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    } else if (c == 3) {
                        sum = sum + 30000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    }
                } else if (b == 3) {
                    sum = sum + 30000;
                    let c = prompt("Введите номер типа сайта который вы хотели бы приобрести: 1- Адаптивная(10к), 2- Неадаптивная(20к), 3-Вегетативная(30к)", "3");
                    if (c == 1) {
                        sum = sum + 10000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    } else if (c == 2) {
                        sum = sum + 20000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    } else if (c == 3) {
                        sum = sum + 30000;
                        alert("Стоимость выбранного вами сайта составила: " + sum);
                    }
                }

            }

            if (a == 3) {
                sum = sum + 30000;
                let b = prompt("Введите номер типа сайта который вы хотели бы приобрести: 1- Уник(10к), 2- Шабл(20к), 3-Вау(30к)", "1");
                if (b == 1) {
                    sum = sum + 10000;
                    let c = prompt("Введите номер типа сайта который вы хотели бы приобрести: 1- Адаптивная(10к), 2- Неадаптивная(20к), 3-Вегетативная(30к)", "1");
                    if (c == 1) {
                        sum = sum + 10000;
                        alert("Общая стоимость создания вашего сайта будет стоить: " + sum);
                    }
                    if (c == 2) {
                        sum = sum + 20000;
                        alert("Общая стоимость создания вашего сайта будет стоить: " + sum);
                    }
                    if (c == 3) {
                        sum = sum + 30000;
                        alert("Общая стоимость создания вашего сайта будет стоить: " + sum);
                    }
                }
                if (b == 2) {
                    sum = sum + 20000;
                    let c = prompt("Введите номер типа сайта который вы хотели бы приобрести: 1- Адаптивная(10к), 2- Неадаптивная(20к), 3-Вегетативная(30к)", "1");
                    if (c == 1) {
                        sum = sum + 10000;
                        alert("Общая стоимость создания вашего сайта будет стоить: " + sum);
                    }
                    if (c == 2) {
                        sum = sum + 20000;
                        alert("Общая стоимость создания вашего сайта будет стоить: " + sum);
                    }
                    if (c == 3) {
                        sum = sum + 30000;
                        alert("Общая стоимость создания вашего сайта будет стоить: " + sum);
                    }
                }
                if (b == 3) {
                    sum = sum + 30000;
                    let c = prompt("Введите номер типа сайта который вы хотели бы приобрести: 1- Адаптивная(10к), 2- Неадаптивная(20к), 3-Вегетативная(30к)", "1");
                    if (c == 1) {
                        sum = sum + 10000;
                        alert("Общая стоимость создания вашего сайта будет стоить: " + sum);
                    }
                    if (c == 2) {
                        sum = sum + 20000;
                        alert("Общая стоимость создания вашего сайта будет стоить: " + sum);
                    }
                    if (c == 3) {
                        sum = sum + 30000;
                        alert("Общая стоимость создания вашего сайта будет стоить: " + sum);
                    }
                }
            }
});
