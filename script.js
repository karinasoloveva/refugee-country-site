const countries = {
    germany: {
        name: "Германия",
        conditions: "Развитая социальная система, бесплатные курсы языка, выплаты беженцам.",
        traditions: "Пунктуальность, семейные ценности, Октоберфест.",
        pros: "Высокая зарплата, безопасность, качественная медицина.",
        cons: "Сложная бюрократия, долгие процедуры.",
    },
    poland: {
        name: "Польша",
        conditions: "Быстрое оформление, доступное жильё, много украинцев.",
        traditions: "Католические праздники, семейность, уважение к труду.",
        pros: "Дёшево жить, близкая культура, быстрый старт.",
        cons: "Низкие зарплаты, возможное напряжённое отношение к мигрантам.",
    },
    canada: {
        name: "Канада",
        conditions: "Программы переселения, бесплатная медицина, высокая защита прав.",
        traditions: "Толерантность, мультикультурализм, уважение границ.",
        pros: "Очень высокий уровень жизни, безопасность.",
        cons: "Холодный климат, дорогая жизнь.",
    },
    spain: {
        name: "Испания",
        conditions: "Тёплый климат, поддержка мигрантов, дружественные люди.",
        traditions: "Сиеста, фестивали, семейные традиции.",
        pros: "Тёплая погода, вкусная еда, спокойная жизнь.",
        cons: "Низкие зарплаты, высокая безработица.",
    }
};

function showCountry() {
    const value = document.getElementById("countrySelect").value;
    const info = document.getElementById("countryInfo");

    if (!value) {
        info.innerHTML = "";
        return;
    }

    const c = countries[value];

    info.innerHTML = `
        <div class="country">
            <h2>${c.name}</h2>
            <p><strong>Условия:</strong> ${c.conditions}</p>
            <p><strong>Традиции:</strong> ${c.traditions}</p>
            <p><strong>Плюсы:</strong> ${c.pros}</p>
            <p><strong>Минусы:</strong> ${c.cons}</p>
        </div>
    `;
}
