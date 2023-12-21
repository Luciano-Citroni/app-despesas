import 'package:app/src/data/expenses/expenses_model.dart';
import 'package:flutter/material.dart';

import 'widgets/card_widget.dart';

class HomePage extends StatelessWidget {
  HomePage({super.key});

  final List<Expenses> dados = [
    Expenses(
      id: "d1b94bb5-9e53-497b-aaf1-6d4fec60f712",
      name: "compras no supermercado",
      description: "fui comprar 2 leites e 1 nescal",
      price: 380,
      fkUser: "dd954051-692e-440d-98bd-d2a395cc6fb1",
      payday: DateTime.now(),
      statusPayment: false,
      dateCreated: DateTime.now(),
    ),
    Expenses(
      id: "962bac61-5900-4e68-93e5-a9ff766f3c78",
      name: "loja de jogos",
      description: "comprei o supermario",
      price: 120.93,
      fkUser: "dd954051-692e-440d-98bd-d2a395cc6fb1",
      payday: DateTime.now(),
      statusPayment: false,
      dateCreated: DateTime.now(),
    ),
    Expenses(
      id: "962bac61-5900-4e68-93e5-a9ff766f3c78",
      name: "loja de jogos",
      description: "comprei o supermario",
      price: 120.93,
      fkUser: "dd954051-692e-440d-98bd-d2a395cc6fb1",
      payday: DateTime.now(),
      statusPayment: false,
      dateCreated: DateTime.now(),
    ),
    Expenses(
      id: "962bac61-5900-4e68-93e5-a9ff766f3c78",
      name: "loja de jogos",
      description: "comprei o supermario",
      price: 120.93,
      fkUser: "dd954051-692e-440d-98bd-d2a395cc6fb1",
      payday: DateTime.now(),
      statusPayment: false,
      dateCreated: DateTime.now(),
    ),
    Expenses(
      id: "962bac61-5900-4e68-93e5-a9ff766f3c78",
      name: "loja de jogos",
      description: "comprei o supermario",
      price: 120.93,
      fkUser: "dd954051-692e-440d-98bd-d2a395cc6fb1",
      payday: DateTime.now(),
      statusPayment: false,
      dateCreated: DateTime.now(),
    )
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Despesas'),
      ),
      body: ListView.builder(
        itemCount: dados.length,
        itemBuilder: (context, index) {
          return Padding(
            padding: const EdgeInsets.all(8.0),
            child: CardHome(
              expenses: dados[index],
            ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(
          Icons.add,
        ),
      ),
    );
  }
}
