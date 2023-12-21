import 'dart:convert';

import 'package:app/src/data/Users/users_model.dart';
import 'package:app/src/data/http/exceptions.dart';
import 'package:app/src/data/http/http_client.dart';

abstract class IUsersRepository {
  Future<Users> getByEmail({required String email});
  // Future<Object> create();
  // Future<Users> getByID(String id);
  // Future<Users> update();
  // Future<bool> delete();
}

class UsersRepository implements IUsersRepository {
  final IHttpCliente client;

  UsersRepository({required this.client});

  @override
  Future<Users> getByEmail({required String email}) async {
    try {
      final Users user;
      final response = await client.get(
          url: 'http://localhost:4880/api/users/get/email/${email}');

      if (response.statusCode == 200) {
        final body = jsonDecode(response.body);
        user = Users.fromMap(body);

        return user;
      }

      return throw NotFoundException('usuario não encontrado');
    } catch (err) {
      return throw Exception('Não foi possivel consultar o usuario');
    }
  }
}
