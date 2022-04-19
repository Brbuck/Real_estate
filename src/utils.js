export function formatacelular(e) {
    e.currentTarget.maxLength = 11;
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{0})(\d{2})(\d{1})(\d{4})(\d{4})/, "$1($2)$3-$4-$5");
    //realizar a formatação...
    e.currentTarget.value = value;
    return e;
  }