// Установка значений для каждого измерителя
function initializeGauge(targetId, value) {
    var opts = {
        angle: 0.0, // Угол старта
        lineWidth: 0.03, // Ширина линии
        radiusScale: 0.89, // Масштаб радиуса
        pointer: {
            length: 0.4, // Длина указателя
            strokeWidth: 0.03, // Ширина указателя
            color: '#262626' // Цвет указателя
        },
        staticZones: [
            {strokeStyle: "#262626", min: 0, max: 10}, // Красная зона// Зеленая зона
        ],
        staticLabels: {
            font: "12px sans-serif", // Шрифт для меток
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Метки
            color: "#262626", // Цвет меток
            fractionDigits: 0 // Количество десятичных знаков
        },
        limitMax: false,     // false = макс не ограничен
        limitMin: false,     // false = мин не ограничен
        highDpiSupport: true, // Поддержка high resolution
    };

    var target = document.getElementById(targetId); // Элемент canvas
    var gauge = new Gauge(target).setOptions(opts); // Создаем gauge

    gauge.maxValue = 10; // Максимальное значение
    gauge.setMinValue(0);  // Минимальное значение
    gauge.animationSpeed = 32; // Скорость анимации
    gauge.set(value); // Установить значение
}

document.addEventListener("DOMContentLoaded", function() {
    initializeGauge('gauge1', 4);
    initializeGauge('gauge2', 2); 
    initializeGauge('gauge3', 1); 
    initializeGauge('gauge4', 4);
});

// Тултипы
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    var checkboxes = document.querySelectorAll('.switch__input');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            var label = checkbox.parentElement;
            if (checkbox.checked) {
                label.setAttribute('title', 'Включен');
            } else {
                label.setAttribute('title', 'Выключен');
            }
            var tooltip = bootstrap.Tooltip.getInstance(label);
            tooltip.setContent({ '.tooltip-inner': label.getAttribute('title') });
        });
    });
});