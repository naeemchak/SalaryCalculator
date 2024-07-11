const payScaleData = {
    "BPS-1": [13550, 13980, 14410, 14840, 15270, 15700, 16130, 16560, 16990, 17420, 17850, 18280, 18710, 19140, 19570, 20000, 20430, 20860, 21290, 21720, 22150, 22580, 23010, 23440, 23870, 24300, 24730, 25160, 25590, 26020, 26450],
    "BPS-2": [13820, 14310, 14800, 15290, 15780, 16270, 16760, 17250, 17740, 18230, 18720, 19210, 19700, 20190, 20680, 21170, 21660, 22150, 22640, 23130, 23620, 24110, 24600, 25090, 25580, 26070, 26560, 27050, 27540, 28030, 28520],
    "BPS-3": [14260, 14840, 15420, 16000, 16580, 17160, 17740, 18320, 18900, 19480, 20060, 20640, 21220, 21800, 22380, 22960, 23540, 24120, 24700, 25280, 25860, 26440, 27020, 27600, 28180, 28760, 29340, 29920, 30500, 31080, 31660],
    "BPS-4": [14690, 15350, 16010, 16670, 17330, 17990, 18650, 19310, 19970, 20630, 21290, 21950, 22610, 23270, 23930, 24590, 25250, 25910, 26570, 27230, 27890, 28550, 29210, 29870, 30530, 31190, 31850, 32510, 33170, 33830, 34490],
    "BPS-5": [15230, 15980, 16730, 17480, 18230, 18980, 19730, 20480, 21230, 21980, 22730, 23480, 24230, 24980, 25730, 26480, 27230, 27980, 28730, 29480, 30230, 30980, 31730, 32480, 33230, 33980, 34730, 35480, 36230, 36980, 37730],
    "BPS-6": [15760, 16600, 17440, 18280, 19120, 19960, 20800, 21640, 22480, 23320, 24160, 25000, 25840, 26680, 27520, 28360, 29200, 30040, 30880, 31720, 32560, 33400, 34240, 35080, 35920, 36760, 37600, 38440, 39280, 40120, 40960],
    "BPS-7": [16310, 17220, 18130, 19040, 19950, 20860, 21770, 22680, 23590, 24500, 25410, 26320, 27230, 28140, 29050, 29960, 30870, 31780, 32690, 33600, 34510, 35420, 36330, 37240, 38150, 39060, 39970, 40880, 41790, 42700, 43610],
    "BPS-8": [16890, 17890, 18890, 19890, 20890, 21890, 22890, 23890, 24890, 25890, 26890, 27890, 28890, 29890, 30890, 31890, 32890, 33890, 34890, 35890, 36890, 37890, 38890, 39890, 40890, 41890, 42890, 43890, 44890, 45890, 46890],
    "BPS-9": [17470, 18560, 19650, 20740, 21830, 22920, 24010, 25100, 26190, 27280, 28370, 29460, 30550, 31640, 32730, 33820, 34910, 36000, 37090, 38180, 39270, 40360, 41450, 42540, 43630, 44720, 45810, 46900, 47990, 49080, 50170],
    "BPS-10": [18050, 19240, 20430, 21620, 22810, 24000, 25190, 26380, 27570, 28760, 29950, 31140, 32330, 33520, 34710, 35900, 37090, 38280, 39470, 40660, 41850, 43040, 44230, 45420, 46610, 47800, 48990, 50180, 51370, 52560, 53750],
    "BPS-11": [18650, 19960, 21270, 22580, 23890, 25200, 26510, 27820, 29130, 30440, 31750, 33060, 34370, 35680, 36990, 38300, 39610, 40920, 42230, 43540, 44850, 46160, 47470, 48780, 50090, 51400, 52710, 54020, 55330, 56640, 57950],
    "BPS-12": [19770, 21200, 22630, 24060, 25490, 26920, 28350, 29780, 31210, 32640, 34070, 35500, 36930, 38360, 39790, 41220, 42650, 44080, 45510, 46940, 48370, 49800, 51230, 52660, 54090, 55520, 56950, 58380, 59810, 61240, 62670],
    "BPS-13": [21160, 22720, 24280, 25840, 27400, 28960, 30520, 32080, 33640, 35200, 36760, 38320, 39880, 41440, 43000, 44560, 46120, 47680, 49240, 50800, 52360, 53920, 55480, 57040, 58600, 60160, 61720, 63280, 64840, 66400, 67960],
    "BPS-14": [22530, 24270, 26010, 27750, 29490, 31230, 32970, 34710, 36450, 38190, 39930, 41670, 43410, 45150, 46890, 48630, 50370, 52110, 53850, 55590, 57330, 59070, 60810, 62550, 64290, 66030, 67770, 69510, 71250, 72990, 74730],
    "BPS-15": [23920, 25900, 27880, 29860, 31840, 33820, 35800, 37780, 39760, 41740, 43720, 45700, 47680, 49660, 51640, 53620, 55600, 57580, 59560, 61540, 63520, 65500, 67480, 69460, 71440, 73420, 75400, 77380, 79360, 81340, 83320],
    "BPS-16": [28070, 30330, 32590, 34850, 37110, 39370, 41630, 43890, 46150, 48410, 50670, 52930, 55190, 57450, 59710, 61970, 64230, 66490, 68750, 71010, 73270, 75530, 77790, 80050, 82310, 84570, 86830, 89090, 91350, 93610, 95870],
    "BPS-17": [45070, 48490, 51910, 55330, 58750, 62170, 65590, 69010, 72430, 75850, 79270, 82690, 86110, 89530, 92950, 96370, 99790, 103210, 106630, 110050, 113470, null, null, null, null, null, null, null, null, null, null],
    "BPS-18": [56880, 61140, 65400, 69660, 73920, 78180, 82440, 86700, 90960, 95220, 99480, 103740, 108000, 112260, 116520, 120780, 125040, 129300, 133560, 137820, 142080, null, null, null, null, null, null, null, null, null, null],
    "BPS-19": [87840, 92370, 96900, 101430, 105960, 110490, 115020, 119550, 124080, 128610, 133140, 137670, 142200, 146730, 151260, 155790, 160320, 164850, 169380, 173910, 178440, null, null, null, null, null, null, null, null, null, null],
    "BPS-20": [102470, 109160, 115850, 122540, 129230, 135920, 142610, 149300, 155990, 162680, 169370, 176060, 182750, 189440, 196130, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    "BPS-21": [113790, 121210, 128630, 136050, 143470, 150890, 158310, 165730, 173150, 180570, 187990, 195410, 202830, 210250, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    "BPS-22": [122190, 130900, 139610, 148320, 157030, 165740, 174450, 183160, 191870, 200580, 209290, 218000, 226710, 235420, 244130, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
};

function populateDropdowns() {
    const currentGradeSelect = document.getElementById('currentGrade');
    const nextGradeSelect = document.getElementById('nextGrade');

    for (const grade in payScaleData) {
        const option = document.createElement('option');
        option.value = grade;
        option.text = grade;
        currentGradeSelect.appendChild(option);
        nextGradeSelect.appendChild(option.cloneNode(true));
    }
}

function calculateNewSalary(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    const currentGrade = document.getElementById('currentGrade').value;
    const nextGrade = document.getElementById('nextGrade').value;
    const currentSalary = parseFloat(document.getElementById('currentSalary').value);
    const resultElement = document.getElementById('result');

    if (payScaleData[currentGrade] && payScaleData[nextGrade]) {
        const nextGradeSalaries = payScaleData[nextGrade];
        const newSalary = nextGradeSalaries.find(salary => salary > currentSalary);

        if (newSalary) {
            resultElement.textContent = `Your new salary will be: ${newSalary}`;
        } else {
            resultElement.textContent = 'No higher salary found in the next grade pay scale data.';
        }
    } else {
        resultElement.textContent = 'Invalid grade selection.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    populateDropdowns();

    const form = document.getElementById('payScaleForm');
    form.addEventListener('submit', calculateNewSalary);
});
