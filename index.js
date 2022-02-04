const removeSpecialChars = ({target}) => {
    const {value} = target;
    console.log(value);
    target.value = value.normalize('NFD')
        .replace(/_|[^\w., ]|\s+(?=\s)/g, '');
};


const campo = document.getElementById('Step3_ObjetoSocial');
  if (campo)
    campo.oninput=removeSpecialChars;