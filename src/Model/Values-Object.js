class ValuesObject {
  id;
  name;
  detail;
  start;
  endDateRef;
  status;
  constructor(id, name, detail, start, endDateRef, status) {
    this.id=id;
    this.name=name;
    this.detail=detail;
    this.start=start;
    this.endDateRef=endDateRef;
    this.status=status;
  }
}
export default ValuesObject;