class Users {
  final String? id;
  final String name;
  final String email;
  final String password;

  Users({
    this.id,
    required this.name,
    required this.email,
    required this.password,
  });

  factory Users.fromMap(Map<String, dynamic> map) {
    return Users(
      id: map['id'],
      name: map['name'],
      email: map['email'],
      password: map['password'],
    );
  }
}
