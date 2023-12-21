import 'package:app/src/pages/home/home_page.dart';
import 'package:app/src/themes/dark_theme.dart';
import 'package:app/src/themes/light_theme.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import 'src/pages/Login/login_page.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'App para Despesas',
      home: LoginPage(),
      theme: ThemeData(
        fontFamily: 'Poppins',
        brightness: Brightness.dark,
        colorScheme: const ColorScheme.dark(
          primary: Color(0xFF8E44D8),
        ),
      ),
    );
  }
}
