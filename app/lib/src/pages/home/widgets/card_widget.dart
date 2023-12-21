import 'package:app/src/data/expenses/expenses_model.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class CardHome extends StatelessWidget {
  final Expenses expenses;

  CardHome({super.key, required this.expenses});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 80,
      decoration: const BoxDecoration(
        borderRadius: BorderRadius.all(Radius.circular(10)),
        color: Colors.deepPurple,
      ),
      alignment: Alignment.centerLeft,
      child: Padding(
        padding: EdgeInsets.all(12),
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(expenses.name),
                  Text(DateFormat('dd/MM/yyyy').format(expenses.payday)),
                  Text("R\$${expenses.price}")
                ],
              ),
            ),
            Row(
              children: [
                IconButton(
                  onPressed: () {},
                  icon: const Icon(Icons.delete_outline),
                ),
                IconButton(
                  onPressed: () {},
                  icon: const Icon(Icons.arrow_forward_ios),
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}
