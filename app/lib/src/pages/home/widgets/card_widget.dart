import 'package:app/src/data/expenses/expenses_model.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class CardHome extends StatelessWidget {
  final Expenses expenses;

  CardHome({super.key, required this.expenses});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 250,
      decoration: BoxDecoration(
        borderRadius: const BorderRadius.all(Radius.circular(10)),
        color: Theme.of(context).colorScheme.primary,
      ),
      alignment: Alignment.centerLeft,
      child: InkWell(
        onTap: () {
          print(expenses.id);
        },
        child: Padding(
          padding: EdgeInsets.symmetric(horizontal: 10, vertical: 15),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                expenses.name,
                style: const TextStyle(
                  fontSize: 26,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(
                height: 5,
              ),
              Expanded(
                child: Text(
                  expenses.description,
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    "R\$${expenses.price}",
                    style: const TextStyle(
                      fontSize: 15,
                    ),
                  ),
                  Text(
                    DateFormat('dd/MM/yyyy').format(expenses.payday),
                    style: const TextStyle(
                      fontSize: 15,
                    ),
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
