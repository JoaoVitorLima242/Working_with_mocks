# Mocks
Mocks are used mainly for unit test. Basically, we create objects/data for specific test, then avoiding replicate code. For example, if we have a process that has three steps, we can create mocked data for each process, so we don't need to await the first step to test the second, because we already have the mocked data for it.