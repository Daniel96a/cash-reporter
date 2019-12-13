export function responseAlert(res) {
    if (res.status === 200) {
      window.alert(`${res.data}`);
    } else {
      window.alert(`${res}`);
    }
}