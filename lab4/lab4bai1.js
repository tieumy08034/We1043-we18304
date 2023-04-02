class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = dob;
    }
  //Lấy tên đầy đủ
    getFullName() {
      return `${this.last_name} ${this.first_name}`;
    }
  //Lấy tuổi theo năm
    getAgeByYear() {
      const dob = new Date(this.dob);
      const diff_ms = Date.now() - dob.getTime();
      const age_dt = new Date(diff_ms);
  
      return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
  //Lấy tuổi theo ngày
    getAgeByDay() {
      const dob = new Date(this.dob);
      const diff_ms = Date.now() - dob.getTime();
      const age_day = Math.floor(diff_ms / (1000 * 60 * 60 * 24));
  
      return age_day;
    }
  }
  
  const students = [
    new Student(1, 'My', 'Tieu', 1, 'my1@gmail.com', '0937474883', '2004/4/1'),
    new Student(2, 'Tham', 'Nguyen', 1, 'nguyenthimytham77@hmail.com', '2004/2/1', ''),
    new Student(3, 'Ly', 'Nguyen', 1, 'lynguyen@gmail.com', '0484758389', '2004/5/6'),
    new Student(4, 'Lợi', 'Nguyen', 1, 'loinguyen@gmail.com', '0384762773', '20004/4/5'),
    new Student(5, 'Cường', 'Tran', 1, 'cuongnguyen@gmail.com', '047274873', '2004/1/10')
  ];
  
  students.sort((a, b) => a.getAgeByDay() - b.getAgeByDay());
  
  console.log('Danh sách sinh viên theo thứ tự số tuổi (tính theo ngày) từ thấp đến cao: ');
  students.forEach(student => {
    console.log(
      `ID: ${student.id}, Họ và tên: ${student.getFullName()}, Tuổi (theo năm): ${student.getAgeByYear()}, Tuổi (theo ngày): ${student.getAgeByDay()}`
    );
  });
