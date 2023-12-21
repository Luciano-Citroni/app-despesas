class Expenses {
  final String? id;
  final String name;
  final String description;
  final double price;
  final String fkUser;
  final DateTime payday;
  final bool statusPayment;
  final DateTime? dateCreated;

  Expenses({
    this.id,
    required this.name,
    required this.description,
    required this.price,
    required this.fkUser,
    required this.payday,
    required this.statusPayment,
    this.dateCreated,
  });

  factory Expenses.fromMap(Map<String, dynamic> map) {
    return Expenses(
      id: map['id'],
      name: map['name'],
      description: map['description'],
      price: map['price'],
      fkUser: map['fkUser'],
      payday: map['payday'],
      statusPayment: map['statusPayment'],
      dateCreated: map['dateCreated'],
    );
  }
}
