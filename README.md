# delayed-request
- This example can be used for querying multiple values trough an API or a simple URL query when there's a **limited amount of multiple connections** at once or required **delay between requests**.

The demo use a service responsible of querying **OMNI's Apple device repair information** for finding within a range (82000, 83000) of support ticket values `os_num` and the social security number number `os_cpf`, *that must be known*, which is the **correct support ticket number**.

